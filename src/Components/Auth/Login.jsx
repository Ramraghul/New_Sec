import React from 'react';
import './Login.css';
import Welcome from "../Asset/Welcome.svg"

function Login() {
    return (
        <>
            <div className="content">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <img src={Welcome} alt="Welcome" className="img-fluid"/>
                        </div>
                        <div className="col-md-6 contents">
                            <div className="row justify-content-center">
                                <div className="col-md-8">
                                    <div className="mb-4">
                                        <h3 className='text-center'>My Home Tv</h3>
                                        {/* <p className="mb-4">Lorem ipsum dolor sit amet elit. Sapiente sit aut eos consectetur adipisicing.</p> */}
                                    </div>
                                    <form action="#" method="post">
                                        <div className="form-group first">
                                            <input type="text" placeholder='Username' className="form-control" id="username"/>

                                        </div>
                                        <div className="form-group last mb-4">
                                            <input type="password" placeholder='Password' className="form-control" id="password"/>

                                        </div>

                                        <div className="d-flex mb-5 align-items-center">
                                            <label className="control control--checkbox mb-0"><span className="caption">Remember me</span>
                                                <input type="checkbox" />
                                                <div className="control__indicator"></div>
                                            </label>
                                            <span className="ml-auto"><a href="!#" className="forgot-pass">Forgot Password</a></span>
                                        </div>

                                        <input type="submit" value="Log In" className="btn btn-block btn-primary" />

                                            {/* <span className="d-block text-left my-4 text-muted">&mdash; or login with &mdash;</span> */}

                                            {/* <div className="social-login">
                                                <a href="#" className="facebook">
                                                    <span className="icon-facebook mr-3"></span>
                                                </a>
                                                <a href="#" className="twitter">
                                                    <span className="icon-twitter mr-3"></span>
                                                </a>
                                                <a href="#" className="google">
                                                    <span className="icon-google mr-3"></span>
                                                </a>
                                            </div> */}
                                    </form>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Login