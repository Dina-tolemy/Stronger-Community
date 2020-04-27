import React from 'react';
import Login from './pages/Login/login';
import Signup from './pages/signup/signup';
import User from './pages/User/user';
//import GetHelp from './pages/getHelp/getHelp';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuth";
//import store from "./store";

import { setCurrentUser, logoutUser } from "./actions/auth";


function App() {
  if (localStorage.jwtToken) {

    const token = localStorage.jwtToken;
    setAuthToken(token);
    const decoded = jwt_decode(token);
    setCurrentUser(decoded);
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
      logoutUser();
      window.location.href = "./";
    }
  }
  return ( 
    <Router>
      <Switch>
        <Route exact strict path="/" component={Login} />
        <Route exact strict path="/signup" component={Signup} />
        <Route exact strict path={["/:id","/:id/allvull/"]} component={User}/>
        </Switch>
    </Router>
  );
}

export default App;
