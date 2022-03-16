import React from 'react';

import { Navbar, Container, Nav } from 'react-bootstrap';
// import PlayIcon from '../../public/assets/play.png';
import { getCurrentlyTrack } from '../api/spotifyApi';


const Player = ({previoustrack, track, nextTrack}) => {

    const handlePlay = () =>{
        console.log('am playing')
        getCurrentlyTrack();
    }

    return (
        <Navbar  fixed="bottom"     bg="dark" variant="dark">
        <Container>
            <Navbar.Brand onClick={handlePlay} > Play </Navbar.Brand>
            {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
        </Container>
    </Navbar>
    );
}

export default Player;
