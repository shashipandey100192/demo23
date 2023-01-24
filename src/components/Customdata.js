import React, { Fragment } from 'react'
import { Link, useParams } from 'react-router-dom'

function Customdata() {
const Studentlist =[
    {
        name:'mohan',
        classess:10,
        adno:1,
        pic:'image/img4.jpg'
    },
    {
        name:'pankaj',
        classess:11,
        adno:2,
        pic:'image/img5.jpg'
    },
    {
        name:'mamata',
        classess:8,
        adno:3,
        pic:'image/img2.jpg'
    },
    {
        name:'rohit',
        classess:7,
        adno:4,
        pic:'image/img2.jpg'
    },
    {
        name:'pankaj singh',
        classess:7,
        adno:5,
        pic:'image/img2.jpg'
    }
]


        //   return (
        //     <Fragment>
        //         <div>Customdata</div>
        //         {Studentlist.map((p)=>{
        //             return(
        //                 <div>
        //                     <h1>Admission No:{p.adno}</h1>
        //                     <h2>{p.name}</h2>
        //                     <h2>{p.classess}</h2>
        //                 </div>
        //             )
        //         })}
        //     </Fragment>
        //   )
        const {id} = useParams();

            return (
                <Fragment>
                    <div>Customdata</div>
                    <div className='container'>
                        <div className='row'>
                           
                    {Studentlist.map((p)=>{
                        return(
                            <div className='col-4 p-3' >
                                <Link to={`${p.adno}`}>
                               <section className='bg-primary text-white p-5 border shadow'>
                                <h3>Admission No:{p.adno}</h3>
                                <h4>Class:{p.classess}</h4>
                                <h5>Student Name : {p.name}</h5>
                                <img src={p.pic} width="100"/>
                                <br/>
                                <button type='button' className='btn btn-danger mt-3'>cardno{p.adno}</button>
                               </section>
                               </Link>
                            </div>
                        )
                    })}
                     
                     </div>
                    </div>
                </Fragment>
            )


}

export default Customdata