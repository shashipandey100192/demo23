import React from "react";
import { Blockbox } from "./Pages";
import './style.css';

function Myhome()
{

const a=150;


    return(
    <div className="first">
        <h1>welcome</h1>
        <h2>heading</h2>
        <section style={{color:'red','font-size':'80px'}}>this is section</section>
        <h3 style={{'font-size':`${a}px`}}>heading three</h3>
        <Blockbox/>
    </div>
    )
}

export default Myhome