import React from 'react';
import {Navbar, Nav,} from 'react-bootstrap'
import '../styles/component/SideNavBar.css';
import Svg from '../Svg';
const Sidenavbar = () => {
    return (
      <Navbar className="d-block" bg="bodySideNavBar">
        
          <Nav.Link>
            <Svg icon="music" width="24" height="24" stroke="white"/>
          </Nav.Link>

          <Nav.Link eventKey="link-2">
            <Svg icon="playlist" width="24" height="24" stroke="white"/>
          </Nav.Link>
        
      </Navbar>
    );
}


export default Sidenavbar;
