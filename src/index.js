import React from 'react';
import ReactDOM from 'react-dom/client';
import Mynav from './components/Mynav';
import {Route,Routes,BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import Bootstrapui from './components/bootstrapui';
import Reactbootstrapui from './components/Reactbootstrapui';
import MaterialUI from './components/MaterialUI';
import Mydata from './components/Mydata';
import Customdata from './components/Customdata';
import Layout from './components/Layout';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <BrowserRouter>
    <Mynav/>
      <Routes>
        <Route path='' element={<Home/>}/>
        <Route path='bootstrappage' element={<Bootstrapui/>}/>
        <Route path='reactbootstrap' element={<Reactbootstrapui/>}/>
        <Route path='materialui' element={<MaterialUI/>}/>
        <Route path='data' element={<Mydata/>}/>
        <Route path='custom' element={<Customdata/>}/>
        <Route path='custom/:id' element={<Layout/>}/>

      </Routes>
    </BrowserRouter>
 
  </React.StrictMode>
);

