import React, { Component } from 'react';

class Login extends Component {
    render() {
        return (
            <div className="col-md-3 col-sm-6 mx-auto formWrapper">
                <img src={'login.svg'} className="w-100" alt="Login" />
                <h3 className="text-center">Login</h3>
                <form>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" required />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" required/>
                    </div>
                    <p className="forgot-password mb-1">Not Register?
                        <a href="#"> Click Here</a>
                    </p>
                    <div className="right">
                        <button type="submit" className="btn btn-primary btn-md">Log in</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Login;
