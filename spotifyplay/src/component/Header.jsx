import React from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap'
import '../styles/component/Header.css'

const Header = () => {
    const CLIENT_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
    const SPOTIFY_URL = process.env.REACT_APP_SPOTIFY_URL;
    const REDIRECT_CALLBACK = process.env.REACT_APP_SPOTIFY_REDIRECT_CALLBACK;
    const RESPONSE_TYPE = 'code';


    // const handleLogin = (e) =>{
    //     e.preventDefault();
    //     axios.get('http://localhost:3001/login')
    //         .then(res => console.log(res))
    // }

    return (

    <Navbar bg="bodyNavBar">
        <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                {/* <Nav.Link onClick={handleLogin} >Login</Nav.Link> */}
                <Nav.Link href={`${SPOTIFY_URL}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_CALLBACK}&response_type=${RESPONSE_TYPE}&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state%20user-top-read%20playlist-read-collaborative%20playlist-read-private%20playlist-modify-public%20playlist-modify-private`} >Login</Nav.Link>
            </Nav>
        </Container>
    </Navbar>
    );
}

export default Header;
