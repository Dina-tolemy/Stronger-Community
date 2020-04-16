import React from 'react';
import Login from './pages/Login/login';
import Signup from './pages/signup/signup';
import { BrowserRouter as Router, Route } from "react-router-dom";


function App() {
  return (
    <Router>
        <Route exact path="/" component={Login} />
        <Route exact path="/signup" component={Signup} />
    </Router>
  );
}

export default App;
