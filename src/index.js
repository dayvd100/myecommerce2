import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Carrinho from './pages/carrinho';
import App from './App';
import Sneakers from './pages/sneakers';
import SweatShirt from './pages/sweatShirt';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Blouses from './pages/blouses';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Router>
       <Routes>
          <Route path='/' element={<App/>}>
              <Route path='/sneakers' element={<Sneakers/>}/>
              <Route path='/sweatshirt' element={<SweatShirt/>}/>
              <Route path='/blouses' element={<Blouses/>}/>
              <Route path='/carrinho' element={<Carrinho/>}></Route>
          </Route>
       </Routes>
    </Router>
  </React.StrictMode>
);

