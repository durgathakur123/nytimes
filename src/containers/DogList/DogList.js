import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import List from '../../components/List'
import Header  from '../../components/Header';
import Banner  from '../../components/Banner';
import Footer  from '../../components/Footer';
import { getDogList } from "../../store/action";

function DogList(props){
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
          {props && props.doglist && 
            <List data={props.doglist} dataCategory={props.getList}/>
          }

          {/* **** FOOTER COMPONENT **** */}
          <Footer />
        </>
    )
}

const mapStateToProps = state => {
    return {
        doglist: state.doglist,
        dogimagelist:state.dogimagelist
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      getList: (data) => dispatch(getDogList(data))
    };
  };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DogList);