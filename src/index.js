import React from 'react';
import ReactDOM from 'react-dom/client';
import { Myhome, Mynavbar } from './components/Welcome';
import Myhome1 from './components/Welcome';
import './components/global.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Mynavbar/>
   <Myhome/>
   <Myhome1/>
  </React.StrictMode>
);

