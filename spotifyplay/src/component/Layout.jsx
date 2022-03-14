import React, {useEffect} from 'react';
// import { useNavigate } from 'react-router-dom';
import {getToken} from '../Redux/appSlice'
import {  setThunkItems,
            createPlaylist } from '../Redux/spottifySlice';
import { useDispatch, useSelector } from 'react-redux';
import Tabledata from './TableData.jsx';
import Buttonsplaylist from './ButtonsPlaylist';
import { Button } from 'react-bootstrap';

const Layout = () => {

    // const navigate = useNavigate();
    const dispatch = useDispatch();
    const {playlist, isLoading} = useSelector((state) => state.spotify)
    
    useEffect(()=>{
        dispatch(getToken());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])


    const handleBringItems = type =>{
        dispatch(setThunkItems(type));
    }

    const handleCreatePlaylist = (e) =>{
        e.preventDefault();
        dispatch(createPlaylist());
    }


    return (
        <div>
            <h1>Hola desde Layout</h1>
            <Buttonsplaylist
                isLoading={isLoading} 
                handleBringItems={handleBringItems}/>
            {playlist ? <Tabledata items={playlist}/>
                   : <span>nothing to show</span>}

            {/* <h1>{currentToken && <span>{currentToken}</span>}</h1> */}
            <Button id="btnSavePlaylist" onClick={handleCreatePlaylist} >
                Save
            </Button>

        </div>
    );
}

export default Layout;
