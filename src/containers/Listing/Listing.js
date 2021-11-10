import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import List from '../../components/List'
import Header  from '../../components/Header';
import Banner  from '../../components/Banner';
import Footer  from '../../components/Footer';
import { getStoryList, setItem } from "../../store/action";

function StoryList(props) {
    useEffect(()=>{
        props.getList("world");
    },[])
    
    return(
        <>
          <Header /> {/* *** HEADER COMPONENT *** */}
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
      storylist: state.storylist
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getList: (data) => dispatch(getStoryList(data)),
    setitem: (data) => dispatch(setItem(data))
  };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StoryList);