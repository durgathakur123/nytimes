import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
// import List from '../../components/List'
import Header  from '../../components/Header';
// import Banner  from '../../components/Banner';
import Footer  from '../../components/Footer';
import ListDetail from '../../components/ListDetail';
// import { getStoryList, setItem } from "../../store/action";

function Detail(props){
    return(
        <>
          {/* **** HEADER COMPONENT **** */}
          <Header />

          {/* **** BANNER COMPONENT **** */}
          {/* <Banner /> */}
          
          {/* **** LIST COMPONENT **** */}

          <ListDetail data={props.getdetail}/>
          {/* {props && props.storylist && 
            <List handleClick={props.setitem} data={props.storylist} dataCategory={props.getList}/>
          } */}

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
  
  // const mapDispatchToProps = dispatch => {
  //   return {
  //     getList: (data) => dispatch(getStoryList(data)),
  //     setitem: (data) => dispatch(setItem(data))
  //   };
  // };

export default connect(
    mapStateToProps
)(Detail);