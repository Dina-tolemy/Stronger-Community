import React, { useEffect, useState } from "react";
import API from "../../utils/API";
import { useParams } from "react-router-dom";
import { logoutUser } from "../../actions/auth";
import { BrowserRouter as Router, Route, Switch,Link } from "react-router-dom";
import User from "../../pages/User/user";

const AllVull = (props) => {
   
    function getvul(event) {
        API.getVulDetails()
          .then((res)=>console.log(res))
          .catch((err) => console.log(err));
      }
    return ( 
        <div className="userMainDiv">
        <div className="sidenav">
          <Link to={`/${props.id}`}>Request Service</Link>
          <Link to="#">People with required services</Link>
          <Link to="/" onClick={logoutUser}>Logout</Link>
        <Router> 
        <Switch>
          <Route exact strict path={`/${props.id}`} component={User}>
            </Route>
            <Route exact strict path="#" component={AllVull}/>
            <Route exact strict path="/"/>
        </Switch>
      </Router>
        </div>
        <div className="mainPage">
        <h1 className="greetingUser">Welcome: {props.name}</h1>
        <button onClick={getvul}>test getting all vul data</button>
        </div> 
      </div>
     );
}
 
export default AllVull;