import React, { Fragment, useState } from 'react';
import axios from 'axios';
import './style.css';
import { Link } from 'react-router-dom';

function Mydata() {
  const [sv,sf]=useState([]);
const getdata = ()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts').then((res)=>{
        console.log(res.data);
        sf(res.data);
    })


}


  return (
    <Fragment>
        <h1>axios api data fatching</h1>
        <button type='submit' onClick={getdata}>fetch data form api</button>
        <hr/>
      {/* {sv.map((a)=>{
          return(
            <Fragment>
              <p>{a.id}</p>
              <p>{a.body}</p>
              <p>{a.title}</p>
              </Fragment>
          )
      })} */}

      {sv.map(a =>{
                return(
                  <Fragment>
                    <Link to={`${a.id}`}>
                    <div key={a.id} className="box">
                 
                        <h3>{a.id}</h3>
                        <h4>{a.title}</h4>
                        <p>{a.body}</p>
                    </div>
                    </Link>
                    </Fragment>
                )
            })}

    </Fragment>
  )
}

export default Mydata