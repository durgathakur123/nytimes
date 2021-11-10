import React from "react";
import "./index.css";
import Login from "./components/Login/Login";
import Register from "./components/Login/Register";
import DogList from "./containers/DogList/DogList";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <>
      <div className={'container-fluid p-0'}>

      <Router>
        <Routes>
            <Route exact path="/" element={<DogList />}/>
            <Route exact path="/Login" element={<Login />}/>
            <Route path="/register" element={<Register />}/>
        </Routes>
      </Router>
      </div> 
    </>
  );
}

export default App;
