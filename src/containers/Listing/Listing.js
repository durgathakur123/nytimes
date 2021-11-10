import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import List from '../../components/List'
import Header  from '../../components/Header';
import Banner  from '../../components/Banner';
import Footer  from '../../components/Footer';
import { getStoryList } from "../../store/action";

function StoryList(props){
    useEffect(()=>{
        props.getList("world");
    },[])
    
    return(
        <>
          {/* **** HEADER COMPONENT **** */}
          <Header />

          {/* **** BANNER COMPONENT **** */}
          <Banner />
          
          {/* **** LIST COMPONENT **** */}
          {props && props.storylist && 
            <List data={props.storylist} dataCategory={props.getList}/>
          }

          {/* **** FOOTER COMPONENT **** */}
          <Footer />
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
      getList: (data) => dispatch(getStoryList(data))
    };
  };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StoryList);