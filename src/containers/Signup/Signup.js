import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { login, signup } from "../../store/action";
import Register from '../../components/Login/Register';

function Signup(props) { 
    // useEffect(()=>{
    //     if(props.isLogin){
    //      return <Link to="/" />
    //     }
    // },[props.isLogin])
    
    if(props.isLogin){
        window.location.href = '/';
    }
    return(
        <>
          <Register handleLogin={props.userSignup} isLogin={props.isLogin}/>
        </>
    )
}

const mapStateToProps = state => {
  return {
      isLogin: state.isLogin
  };
};

const mapDispatchToProps = dispatch => {
  return {
    userSignup: (data) => dispatch(signup(data)),
  };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Signup);