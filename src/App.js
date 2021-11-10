import React from "react";
import "./index.css";
import Login from "./components/Login/Login";
import Register from "./components/Login/Register";
import Listing from "./containers/Listing/Listing";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Detail from "./containers/Listing/Detail";

function App() {
  return (
    <>
      <div className={'container-fluid p-0'}>

      <Router>
        <Routes>
            <Route exact path="/Login" element={<Login />}/>
            <Route path="/register" element={<Register />}/>
            <Route exact path="/" element={<Listing />}/>
            <Route exact path="/Detail" element={<Detail />}/>
        </Routes>
      </Router>
      </div> 
    </>
  );
}

export default App;
