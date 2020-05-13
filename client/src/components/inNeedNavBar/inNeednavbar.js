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
      <Link to="/Main" >
        <Tippy className="allpeopleTooltip" content="Add new Request">
          <i className="far fa-plus-square" style={{ fontSize: 30 }}></i>
        </Tippy>
      </Link>
      <Link to="/Myservice">
        <Tippy className="allpeopleTooltip" content="Your current Requests">
          <i className="fas fa-server" style={{ fontSize: 30 }}></i>
        </Tippy>
      </Link>
      <Link to="/Messages">
        <Tippy className="allpeopleTooltip" content="Your Messages">
        <i class='fas fa-mail-bulk' style={{fontSize:30}}></i>
        </Tippy>
      </Link>
      <Link to="/needProfile">
        <Tippy className="allpeopleTooltip" content="Profile">
          <i className="fas fa-address-card" style={{ fontSize: 30 }}></i>
        </Tippy>
      </Link>
      <Link to="/" onClick={logoutUser}>
      <Tippy className="allpeopleTooltip" content="Log out">
        <i className="fas fa-sign-out-alt" style={{ fontSize: 30 }}></i>
        </Tippy>
      </Link>
    </div>
  );
}

export default HelperNavBar;
