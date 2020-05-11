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
      <Link to="/Helper">
        <Tippy className="allpeopleTooltip" content="All people in need">
          <i className="fas fa-home" style={{ fontSize: 30 }}></i>
        </Tippy>
      </Link>
      <Link to="/Search">
        <Tippy className="allpeopleTooltip" content="Search by suburb">
          <i className="fas fa-search" style={{ fontSize: 30 }}></i>
        </Tippy>
      </Link>
      <Link to="/Profile">
        <Tippy className="allpeopleTooltip" content="Profile">
          <i className="fas fa-address-card" style={{ fontSize: 30 }}></i>
        </Tippy>
      </Link>
      <Link to="/" onClick={logoutUser}>
        {" "}
        <Tippy className="allpeopleTooltip" content="Log out">
        <i className="fas fa-sign-out-alt" style={{ fontSize: 30 }}></i>
        </Tippy>
      </Link>
    </div>
  );
}

export default HelperNavBar;
