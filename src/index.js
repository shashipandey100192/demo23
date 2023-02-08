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
import Detailslayout from './components/Detailslayout';
import Loginform from './components/Loginform';
import { Auth0Provider } from '@auth0/auth0-react';
import Authlogin from './components/Authpage';
import { Provider } from 'react-redux';
import { store } from './components/redux/Store';
import { Counter } from './components/redux/Myreduxlogin';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
    domain="dev-2lztdozl12hbrfpe.us.auth0.com"
    clientId="s960UexfIozHcldywDXxv2b70jNAaJdm"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
    >
    <BrowserRouter>
   <Provider store={store}>
    <Mynav/>
      <Routes>
        {/* <Route path='' element={<Home/>}/> */}
        <Route path='/' element={<Counter/>}/>
        <Route path='/auto' element={<Authlogin/>}/>
        <Route path='bootstrappage' element={<Bootstrapui/>}/>
        <Route path='reactbootstrap' element={<Reactbootstrapui/>}/>
        <Route path='materialui' element={<MaterialUI/>}/>
        <Route path='data' element={<Mydata/>}/>
        <Route path='data/:id' element={<Detailslayout/>}/>
        <Route path='custom' element={<Customdata/>}/>
        <Route path='custom/:id' element={<Layout/>}/>
        <Route path='forms' element={<Loginform/>}/>
      </Routes>
      </Provider>
    </BrowserRouter>
    </Auth0Provider>
 
  </React.StrictMode>
);

