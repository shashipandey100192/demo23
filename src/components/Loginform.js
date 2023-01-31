import React, { Fragment, useEffect, useState } from 'react';
import { LoginModal } from './Modals';

function Loginform() {

const [mydata,setdata]=useState([]);

    useEffect(()=>{
        setdata(localStorage.getItem('studentlist'));
        console.log(mydata);
    })

  return (
    <div className='container'>
        <div className='row'>
            <div className='col-12'>
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#loginModal">
                Login
                </button>
            <LoginModal/>
            </div>
        </div>

        <div className='row'>
            <div className='col-12'>
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                 
                        {mydata}
                    
                </tbody>
                </table>
            </div>
        </div>


    </div>
  )
}

export default Loginform