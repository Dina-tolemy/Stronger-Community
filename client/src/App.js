import React from 'react';
import Login from './pages/Login/login';
import Signup from './pages/signup/signup';
import Helper from './pages/Helper/helper';
import GetHelp from './pages/getHelp/getHelp';
import { BrowserRouter as Router, Route } from "react-router-dom";


function App() {
  return (
    <Router>
        <Route exact path="/" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/helper" component={Helper}/>
        <Route exact path="/gethelp" component={GetHelp}/>
        
    </Router>
  );
}

export default App;
