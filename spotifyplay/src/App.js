import React from 'react';
import {BrowserRouter, Routes , Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './Redux/store.js';



import Header from './component/Header.jsx';
import Sidenavbar from './component/SideNavBar';
import Login from './page/Login';
import Layout from './component/Layout.jsx';


import {Container, Row, Col} from 'react-bootstrap'
import './styles/component/SideNavBar.css';
import './App.css';
import Playlist from './page/Playlist.jsx';


function App() {

  return (
    <Provider store={store}>
      
        <Header />
        <Container fluid>
          <Row>
            {/* <Col xs={2} md={3} lg={3} id="ColSideBar">
              <Sidenavbar />
            </Col> */}
            <Col  id="page-content-wrapper">
              <BrowserRouter>
                <Routes>
                  <Route exact path='/' element={<Layout/>}  />
                  <Route exact path='/playlist' element={<Playlist/>} />
                  <Route exact path='/login' element={<Login/>}  />
                </Routes>
              </BrowserRouter>
            </Col>
          </Row>
        </Container>
      
    </Provider>
  );
}

export default App;
