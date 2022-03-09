import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import {getToken} from '../Redux/appSlice'
import { setThunkPlaylist } from '../Redux/spottifySlice';
import { useDispatch, useSelector } from 'react-redux';
import Tabledata from './TableData.jsx';

const Layout = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const credentials = useSelector((state) => state.tokenReducer.credentials);
    const items = useSelector((state) => state.spotify.playlist)
    // const currentToken = '';

    // const {token, getToken} = useContext(UserContext);
    // const [items, setItems] = useState([]);
    useEffect(()=>{
        dispatch(getToken());
        if (credentials)
            dispatch(setThunkPlaylist());

        // if (currentToken){
        //     console.log("get Token");
        //     loginSpotify(currentToken);
            // refreshAccessToken(currentToken);
            // dispatch(setThunkPlaylist());
        
    }, [credentials.access_token])


    const logout = () => {
        // setToken("");
        window.localStorage.removeItem("token");
        navigate('/login');
        
    }


    return (
        <div>
            <h1>Hola desde Layout</h1>
            <h2 onClick={logout}>
                Logout
            </h2>
            {items ? <Tabledata items={items}/>
                   : <span>nothing to show</span>}

            {/* <h1>{currentToken && <span>{currentToken}</span>}</h1> */}
        </div>
    );
}

export default Layout;
