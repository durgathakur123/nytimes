import React, { Component } from "react";
import  {Link} from 'react-router-dom';

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email:'',
            password:''
        }       
}
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
       
    } 
    handleSubmit = (e) => {
        e.preventDefault();
        console.log('submit', this.state.email, this.state.password);
        let userData = {email:this.state.email,
            password:this.state.password}
         this.props.handleLogin(userData);
    }
    render() {
        return (
            <div className={'h-100 d-flex align-items-center'}>
                <div className={'col-md-3 col-sm-6 mx-auto formWrapper bg-white'}>
                    <div className={'logo mx-auto'}>
                        <img src={'logo.png'} className="w-100" alt="register" />
                    </div>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <input type="email"
                             id="email"
                             className={'form-control'}
                             value={this.state.email}
                             onChange={this.handleChange}
                             placeholder="Email*" required/>
                        </div>

                        <div className="form-group">
                            <input type="password" 
                             id="password"
                             className={'form-control'} 
                             value={this.state.password}
                             onChange={this.handleChange}
                             placeholder="Password*" required />
                        </div>

                        <p className="mb-1 font-sm">
                            Already registered? <Link to='/Login'>Login here</Link>
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