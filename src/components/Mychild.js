import React from 'react';
import './style.css';


function Mychild(props) {
  return (
    <div className='mychild'>
        <h1>Mychild</h1>
        <h2>{props.ducat} {props.xyz}</h2>
        </div>
  )
}

export default Mychild