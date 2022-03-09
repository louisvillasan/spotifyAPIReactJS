import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import {getToken} from '../Redux/appSlice'
import { setThunkPlaylist, setThunkItems } from '../Redux/spottifySlice';
import { useDispatch, useSelector } from 'react-redux';
import Tabledata from './TableData.jsx';
import Buttonsplaylist from './ButtonsPlaylist';
import { Button } from 'react-bootstrap';

const Layout = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const items = useSelector((state) => state.spotify.playlist)
    
    useEffect(()=>{
        dispatch(getToken());
    },[])

    
    const handleBringItems = (e) =>{
        e.preventDefault();
        console.log('am working');
        dispatch(setThunkItems());

    }


    return (
        <div>
            <h1>Hola desde Layout</h1>
            <Buttonsplaylist handleBringItems={handleBringItems}/>
            {items ? <Tabledata items={items}/>
                   : <span>nothing to show</span>}

            {/* <h1>{currentToken && <span>{currentToken}</span>}</h1> */}
            <Button >
                Save
            </Button>

        </div>
    );
}

export default Layout;
