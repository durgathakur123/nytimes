import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { login } from "../../store/action";
import Login from '../../components/Login/Login';
import { Link } from 'react-router-dom';

function StoryList(props) { 
    
    if(props.isLogin){
        window.location.href = '/';
    }
    return(
        <>
          <Login handleLogin={props.userLogin} isLogin={props.isLogin}/>
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
    userLogin: (data) => dispatch(login(data)),
  };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StoryList);