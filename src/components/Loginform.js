import React from 'react';
import { LoginModal,Headingone } from './Modals';

function Loginform() {

const a=[
    {name:'kumar',age:20,height:10},
    {name:'singh',age:20,height:10},
    {name:'pankaj',age:20,height:10},
    {name:'kumar',age:20,height:10},
    {name:'kumar',age:20,height:10},
    {name:'kumar',age:20,height:10},
];



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
                <Headingone/>
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
                    {/* {a.map(({name,age,height})=>{ */}
                    {a.map((a)=>{
                        return(
                            <tr>
                                <td>{a.name}</td>
                                <td>{a.age}</td>
                                <td>{a.height}</td>
                            </tr>
                        )
                    })}
                    
                    
                </tbody>
                </table>
            </div>
        </div>


    </div>
  )
}

export default Loginform