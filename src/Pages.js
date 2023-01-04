import React, { Fragment, useState } from "react";
import './style.css';

export const Blockbox = ()=>{

const [statevariable, statefunction]=useState(10);

// const abc= ()=>{
//     statefunction(60)
// }

const abc= (inputvalue)=>{
    statefunction(inputvalue.target.value);
    console.log(inputvalue);
}

    return(
        <Fragment>
        <h1 className="one">this is box 10</h1>
            <input type="text" placeholder="enter number" value={statevariable} style={{padding:10}} onInput={abc} />
            <h1>{statevariable} </h1>
        </Fragment>
    )

}