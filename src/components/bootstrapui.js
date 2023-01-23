import React, { Fragment } from 'react'
import Mychild from './Mychild';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

function Bootstrapui() {
  var name="this is first name";
  return (
    <Fragment>
      <section className='container p-5 bg-primary'>
    <h1>bootstrap ui {name}</h1>
    </section>
    <Mychild ducat="it is located in noida" xyz={name}></Mychild>
    </Fragment>
  )
}

export default Bootstrapui