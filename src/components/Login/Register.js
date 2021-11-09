import React, { Component } from "react";

export default class SignUp extends Component {
    render() {
        return (
            <div className="col-md-3 col-sm-6 mx-auto formWrapper">
            <img src={'login.svg'} className="w-100" alt="register" />
            <h3 className="text-center">Register</h3>
                <form>
                    <div className="form-group">
                        <label>First name</label>
                        <input type="text" className="form-control" />
                    </div>

                    <div className="form-group">
                        <label>Last name</label>
                        <input type="text" className="form-control" required />
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" required/>
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" required />
                    </div>
                    <p className="mb-1">
                        Already registered? <a href="#">Login here</a>
                    </p>
                    <div className="form-group right">
                    <button type="submit" className="btn btn-primary btn-md">Register</button>
                    
                    
                    </div>
                </form>
            </div>
        );
    }
}