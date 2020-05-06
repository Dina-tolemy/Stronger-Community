import React from "react";
import "./style.css";
import Tippy from "@tippy.js/react";
import "tippy.js/dist/tippy.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { logoutUser } from "../../actions/auth";

function HelperNavBar(props) {
  return (
    <div className="sidenav">
      <br></br>
      <Link to="/Main">
        <Tippy className="allpeopleTooltip" content="Request a service">
          <i className="far fa-plus-square" style={{ fontSize: 30 }}></i>
        </Tippy>
      </Link>
      <Link to="/Myservice">
        <Tippy className="allpeopleTooltip" content="Your current services">
          <i className="fas fa-server" style={{ fontSize: 30 }}></i>
        </Tippy>
      </Link>

      <Link to="/needProfile">
        <Tippy className="allpeopleTooltip" content="Profile">
          <i className="fas fa-address-card" style={{ fontSize: 30 }}></i>
        </Tippy>
      </Link>
      <Link to="/" onClick={logoutUser}>
        <i className="fas fa-sign-out-alt" style={{ fontSize: 30 }}></i>
      </Link>
    </div>
  );
}

export default HelperNavBar;
