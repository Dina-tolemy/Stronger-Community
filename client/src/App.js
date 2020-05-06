import React from "react";
import Login from "./pages/Login/login";
import Signup from "./pages/signup/signup";
import User from "./pages/User/user";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuth";
import Helper from "./pages/helper/Helper";
import Search from "./pages/search/Search";
import UserServices from "./pages/Services/Services"
import Profile from "./pages/Profile/profile";
import inNeedProfile from "./pages/inNeedprofile/inNeedprofile";
import UserDetails from "./pages/UserDetails/UserDetails"

import { setCurrentUser, logoutUser } from "./actions/auth";
function App() {
  if (sessionStorage.jwtToken) {
    const token = sessionStorage.jwtToken;
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
        <Route exact strict path="/" component={Login}/>
        <Route exact strict path="/signup" component={Signup} />
        <Route exact strict path="/Helper" component={Helper} />
        <Route exact strict path="/Search" component={Search}/>
        <Route exact strict path="/Main" component={User} />
        <Route exact strict path="/Myservice" component={UserServices}/> 
        <Route exact strict path="/Profile" component={Profile}/> 
        <Route exact strict path="/needProfile" component={inNeedProfile}/>
        <Route exact strict path="/:id" component={UserDetails}/>
      </Switch>
    </Router>
  );
}

export default App;
