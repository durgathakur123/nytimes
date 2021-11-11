import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import List from '../../components/List'
import Header  from '../../components/Header';
import Banner  from '../../components/Banner';
import Footer  from '../../components/Footer';
import { getStoryList, setItem , loginsuccess, logout} from "../../store/action";

function StoryList(props) {
    useEffect(()=>{
        props.getList("world");
        if(localStorage.getItem('access_token')){
         props.loginsuccess(true)
        }
    },[]);
    
    return(
        <>
          <Header isLogin={props.isLogin} isLogout={props.isLogout} logout={props.logout}/> {/* *** HEADER COMPONENT *** */}
          <Banner /> {/* *** BANNER COMPONENT *** */}
          {props && props.storylist && 
            <List handleClick={props.setitem} data={props.storylist} dataCategory={props.getList}/>
          } {/* **** LIST COMPONENT **** */}
          <Footer /> {/* **** FOOTER COMPONENT **** */}
        </>
    )
}

const mapStateToProps = state => {
  return {
      storylist: state.storylist,
      isLogin: state.isLogin,
      isLogout: state.isLogout
  }; 
};

const mapDispatchToProps = dispatch => {
  return {
    getList: (data) => dispatch(getStoryList(data)),
    setitem: (data) => dispatch(setItem(data)),
    loginsuccess:(data) => dispatch(loginsuccess(data)),
    logout:() => dispatch(logout())
  };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StoryList);