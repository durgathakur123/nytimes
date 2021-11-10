import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import Header  from '../../components/Header';
import Footer  from '../../components/Footer';
import ListDetail from '../../components/ListDetail';

function Detail(props){
    return(
        <>
          {/* **** HEADER COMPONENT **** */}
          <Header />
          
          {/* **** LIST COMPONENT **** */}

          <ListDetail data={props.getdetail}/>

          {/* **** FOOTER COMPONENT **** */}
          <Footer />
        </>
    )
}

const mapStateToProps = state => {
    return {
        getdetail: state.setitem
    };
  };

export default connect(
    mapStateToProps
)(Detail);