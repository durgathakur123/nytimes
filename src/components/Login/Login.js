import React, { Component } from 'react';

class Login extends Component {
    render() {
        return (
            <div className={'h-100 d-flex align-items-center'}>
                <div className="col-md-3 col-sm-6 mx-auto formWrapper bg-white">
                    <div className={'logo mx-auto'}>
                        <img src={'logo.png'} className="w-100" alt="Login" />
                    </div>
                    <h6 className="text-center title">Login</h6>
                    <form>
                        <div className="form-group">
                            <input type="email" className={'form-control'} placeholder="Email" required />
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" placeholder="Password"  required/>
                        </div>
                        <p className="mb-1 font-sm">Not Register?
                            <a href="#"> Click Here</a>
                        </p>
                        <div className="right">
                            <button type="submit" className="btn btn-dark btn-sm">Log in</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;
