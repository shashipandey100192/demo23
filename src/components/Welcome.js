import React, { Fragment } from "react";
import './global.css';

export const Myhome = ()=>
{
    return(
        <h1>this is Home page</h1>
    )


}

function Myhome1()
{
    return(
        <h2>this is second Home page</h2>

    )

}
export default Myhome1


export const Mynavbar = ()=>{

    return(
        <Fragment>
            <div className="mynav">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Service</a></li>
                    <li><a href="#">form</a></li>
                    <li><a href="#">Others</a></li>
                </ul>
            </div>

        </Fragment>


    )


}

