import React, { Component } from "react";

export default class SignUp extends Component {
    render() {
        return (
            <div className={'h-100 d-flex align-items-center'}>
                <div className={'col-md-3 col-sm-6 mx-auto formWrapper bg-white'}>
                    <div className={'logo mx-auto'}>
                        <img src={'logo.png'} className="w-100" alt="register" />
                    </div>
                    {/* <h6 className="text-center title">Register</h6> */}
                    <form>
                        <div className="form-group">
                            <input type="text" className={'form-control'} placeholder="First Name*" required />
                        </div>

                        <div className="form-group">
                            <input type="text" className={'form-control'} placeholder="Last Name" />
                        </div>

                        <div className="form-group">
                            <input type="email" className={'form-control'} placeholder="Email*" required/>
                        </div>

                        <div className="form-group">
                            <input type="password" className={'form-control'} placeholder="Password*" required />
                        </div>

                        <p className="mb-1 font-sm">
                            Already registered? <a href="#">Login here</a>
                        </p>

                        <div className="form-group right">

                        <button type="submit" className="btn btn-dark btn-sm">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}