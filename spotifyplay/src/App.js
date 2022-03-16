import React from 'react';
import {BrowserRouter, Routes , Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './Redux/store.js';



import Header from './component/Header.jsx';
import Login from './page/Login';
import Layout from './component/Layout.jsx';


import {Container} from 'react-bootstrap'
import './styles/component/SideNavBar.css';
import './App.css';
import Playlist from './page/Playlist.jsx';
import Player from './component/Player.jsx';


function App() {

  return (
    <Provider store={store}>
      
        <Header />
        <Container fluid>
            <BrowserRouter>
              <Routes>
                <Route exact path='/' element={<Layout/>}  />
                <Route exact path='/playlist' element={<Playlist/>} />
                <Route exact path='/login' element={<Login/>}  />
              </Routes>
            </BrowserRouter>
        </Container>
        <Player/>

      
    </Provider>
  );
}

export default App;
