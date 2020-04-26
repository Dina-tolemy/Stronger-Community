import React from 'react';
import Login from './pages/Login/login';
import Signup from './pages/signup/signup';
import User from './pages/User/user';
//import GetHelp from './pages/getHelp/getHelp';
import { BrowserRouter as Router, Route } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuth";
//import store from "./store";

import { setCurrentUser, logoutUser } from "./actions/auth";


function App() {
  if (localStorage.jwtToken) {
    // Set auth token header auth
    const token = localStorage.jwtToken;
    setAuthToken(token);
    // Decode token and get user info and exp
    const decoded = jwt_decode(token);
    // Set user and isAuthenticated
    setCurrentUser(decoded);
    // Check for expired token
    const currentTime = Date.now() / 1000; // to get in milliseconds
    if (decoded.exp < currentTime) {
      // Logout user
      logoutUser();
  
      // Redirect to login
      window.location.href = "./";
    }
  }
  return (
    <Router>
        <Route exact strict path="/" component={Login} />
        <Route exact strict path="/signup" component={Signup} />
        <Route exact strict path="/:id" component={User}/>
    </Router>
  );
}

export default App;
