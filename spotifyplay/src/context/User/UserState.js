import React, {useReducer} from 'react';

import axios from 'axios';



import UserContext from './UserContext.js';
import UserReducer from './UserReducer.js';

const UserState = (props)=>{

    const API = process.env.REACT_APP_BASE_URL;

    const initialState = {
        currentUser: null,
        token: null
    }

    const [state, dispatch] = useReducer(UserReducer, initialState);
    
    const getLocalToken =  async ()=>{
        setToken(localStorage.getItem('token'));
    }

    const setLocalToken =  (token) =>{
        localStorage.setItem('token', token);
    }

    const getToken = ()=>{
        const hash = window.location.hash;
        if (!state.token && hash){
            console.log('tengo token')
            const newToken = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1];
            setToken(newToken);
            setLocalToken(newToken);
        }
        if (!state.token && !hash){
            console.log('no tengo token ni hash');
            getLocalToken()
                .then(response => console.log("Recupere el token desde local storage"));
        }


        // window.location.hash = "";

    }

    const setToken = (token) =>{
        dispatch({
            type: 'SET_TOKEN',
            payload: token
        });
    }



    const login = async (email,password)=>{
        return axios.post(`${API}auth/login`, {email, password})
            .then(response => {setLocalToken(response.data); return response.data})
            .then(response => {dispatch({
                type: 'GET_USER',
                payload: JSON.stringify(response)
            }); return response})
    }

    const signUp = async (email,password, passwordcp)=>{
            return axios.post(`${API}user`, {email, password})
            .then(response  => {setLocalToken(response.data); return response.data})
            .then(response => { 
                    dispatch({
                        type: 'GET_USER',
                        payload: JSON.stringify(response)
                    }); 
                    return response 
                });
    }

    const logout = ()=>{
        dispatch({
            type: 'DELETE_CURRENT_USER'
        })
        localStorage.removeItem('user');
        
    }


    


    return (
        <UserContext.Provider value={{
            currentUser: state.currentUser,
            token: state.token,
            login,
            signUp,
            logout,
            setToken,
            getLocalToken,
            getToken

        }}>
            {props.children}
        </UserContext.Provider>
    )

}

export default UserState;