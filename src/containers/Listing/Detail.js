import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import Header  from '../../components/Header';
import Footer  from '../../components/Footer';
import ListDetail from '../../components/ListDetail';
import {  logout} from "../../store/action";
function Detail(props){
    return(
        <>
          {/* **** HEADER COMPONENT **** */}
          <Header  isLogin={props.isLogin} isLogout={props.isLogout} logout={props.logout}/>
          
          {/* **** LIST COMPONENT **** */}

          <ListDetail data={props.getdetail}/>

          {/* **** FOOTER COMPONENT **** */}
          <Footer />
        </>
    )
}

const mapStateToProps = state => {
    return {
        getdetail: state.setitem,
        isLogin: state.isLogin,
        isLogout: state.isLogout
    };
  };
  const mapDispatchToProps = dispatch => {
    return {
      logout:() => dispatch(logout())
    };
  };
  
export default connect(
    mapStateToProps,mapDispatchToProps
)(Detail);