import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {
    constructor(props) {
            super();
            this.state = {
                email:'',
                password:''
            }       
    }
   componentDidUpdate(){
       return 
   }
    handleChange = (e) => {
        this.setState({
            [e.target.id]:e.target.value
        })
    } 
    handleSubmit = (e) => {
        e.preventDefault();
        console.log('submit');
        let userData = {email:this.state.email,
                password:this.state.password}
        this.props.handleLogin(userData);
    }

    render() {
        return (
            <div className={'h-100 d-flex align-items-center'}>
                <div className="col-md-3 col-sm-6 mx-auto formWrapper bg-white">
                    <div className={'logo mx-auto'}>
                        <img src={'logo.png'} className="w-100" alt="Login" />
                    </div>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <input type="text" 
                            className={'form-control'} 
                            placeholder="Email" 
                            name="email" 
                            id="email"
                            value={this.state.email} 
                            onChange={this.handleChange} required />
                        </div>
                        <div className="form-group">
                            <input type="password" 
                            name="password" 
                            id="password"
                            value={this.state.password} 
                            className="form-control" 
                            placeholder="Password" 
                            onChange={this.handleChange}  required/>
                        </div>
                        <p className="mb-1 font-sm">Not Register?
                            <Link to='/Register'> Click Here</Link>
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
