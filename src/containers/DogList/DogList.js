import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import List from '../../components/List'
import Header  from '../../components/Header';
import Banner  from '../../components/Banner';
import Footer  from '../../components/Footer';
import { getDogList, getDogBreedByName } from "../../store/action";

function DogList(props){
    useEffect(()=>{
        props.getList("world");
    },[])

    const [state, setstate] = useState(false);

    function handleBreedClick(val) {
        setstate(!state);
        props.getDogBreed(val)
    }

    return(
        <>
          {/* **** HEADER COMPONENT **** */}
          <Header />

          {/* **** BANNER COMPONENT **** */}
          <Banner />
          
          {/* **** LIST COMPONENT **** */}
          {props && props.doglist && 
            <List handleClick={handleBreedClick} data={props.doglist} dataCategory={props.getList}/>
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
      getList: (data) => dispatch(getDogList(data)),
      getDogBreed: (payload) => dispatch(getDogBreedByName(payload)),
    };
  };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DogList);