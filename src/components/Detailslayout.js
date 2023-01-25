import React, { Fragment, useEffect,useState } from 'react';
import axios from 'axios';
import './style.css';
import { useParams } from 'react-router-dom';


function Detailslayout() {
    const [sv,sf]=useState([]);
    const {id}=useParams();
useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res)=>{
        console.log(res.data);
        sf(res.data);
    })

})


  return (
    <Fragment>
        <div className='cusdesign'>
            <section>left</section>
            <section>
            <h1>{sv.id}</h1>
            {sv.body}
      


            </section>
        </div>
    </Fragment>
  )
}

export default Detailslayout