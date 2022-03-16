import React, {useEffect} from 'react';
// import { useNavigate } from 'react-router-dom';
import {getToken} from '../Redux/appSlice'
import { createPlaylist } from '../Redux/spottifySlice';
import { useDispatch, useSelector } from 'react-redux';

import Tabledataaction from './TableDataAction.jsx';
import Buttonsplaylist from './ButtonsPlaylist';
import { Button } from 'react-bootstrap';

const Layout = () => {

    // const navigate = useNavigate();
    const dispatch = useDispatch();
    const {playlist} = useSelector((state) => state.spotify)
    
    useEffect(()=>{
        dispatch(getToken());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])


    const handleCreatePlaylist = (e) =>{
        e.preventDefault();
        dispatch(createPlaylist());
    }


    return (
        <div>
            <h1>Hola desde Layout</h1>
            <Buttonsplaylist/>

            {(playlist.length >  0) &&
                <>
                    <Tabledataaction items={playlist} />
                    <Button id="btnSavePlaylist" onClick={handleCreatePlaylist} >
                        Save as a new playlist
                    </Button>
                </> 
            }

        </div>
    );
}




export default Layout;
