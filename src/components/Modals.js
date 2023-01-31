import React, { Fragment } from 'react';
import { useForm } from 'react-hook-form';

export const LoginModal = ()=>{
    const studnetgroup=[];

    const { register, handleSubmit } = useForm();
    const onSubmit = (data)=>{
        console.log(data);
        studnetgroup.push(data)
        localStorage.setItem("studentlist",JSON.stringify(studnetgroup));

    }
    
 




    return(
        <Fragment>
            <div className="modal fade" id="loginModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5" >Modal title</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-3">
                            <label className="form-label">Full Name</label>
                            <input type="text" className="form-control" {...register("firstName")}/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email address</label>
                            <input type="email" className="form-control" {...register("email")} />
                        </div>
                        <div className="mb-3">
                            <label  className="form-label">Password</label>
                            <input type="password" className="form-control" {...register("pass")}/>
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" {...register("status")} />
                            <label className="form-check-label" >Active</label>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                        <button type="reset" className="btn btn-danger">cancle</button>
                        </form>
                 
                </div>
                {/* <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div> */}
                </div>
            </div>
            </div>
        </Fragment>
    )

}