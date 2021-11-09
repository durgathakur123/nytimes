import React from "react";
import "./index.css";
import Login from "./components/Login/Login";
import Register from "./components/Login/Register";
import DogList from "./containers/DogList/DogList";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <>
      <div className={'container-fluid p-0'}>
      {/* <Router>
        <Switch>
            <Route exact path="/" component={Login}/>
        </Switch>
      </Router> */}
      <Login />
      <Register />
      <DogList />
      </div> 
    </>
  );
}

export default App;
