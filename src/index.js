import React from 'react';
import ReactDOM from 'react-dom/client';
import Mynav from './components/Mynav';
import {Route,Routes,BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import Bootstrapui from './components/bootstrapui';
import Reactbootstrapui from './components/Reactbootstrapui';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <BrowserRouter>
    <Mynav/>
      <Routes>
        <Route path='' element={<Home/>}/>
        <Route path='bootstrappage' element={<Bootstrapui/>}/>
        <Route path='reactbootstrap' element={<Reactbootstrapui/>}/>
      </Routes>
    </BrowserRouter>
 
  </React.StrictMode>
);

