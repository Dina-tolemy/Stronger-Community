import React, { useEffect, useState } from "react";
import { logoutUser } from "../../actions/auth";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import API from "../../utils/API";
import GetHelpCard from "../../components/GetHelpCard/GetHelpCard";
import Search from "../search/Search";
import Wrapper from "../../components/wrapper/wrapper";

const Profile = (props) => {
  const [user, setUser] = useState({});
  const id = sessionStorage.getItem("çurrentUserId");
  useEffect(() => {
    API.getuserDetails(id).then((res) => setUser(res.data));
  }, [user]);

  function checkuserService(id) {
    API.chechService(id)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }
  return (
    <div className="helperMainDiv">
      <div className="sidenav">
        <br></br>
        <Link to="/Helper">
          <i class="fas fa-home" style={{ fontSize: 30 }}></i>
        </Link>
        <Link to="/Search">
          {" "}
          <i className="fas fa-search" style={{ fontSize: 30 }}></i>
        </Link>
        <Link to="/Profile">
          {" "}
          <i className="fas fa-address-card" style={{ fontSize: 30 }}></i>
        </Link>
        <Link to="/" onClick={logoutUser}>
          {" "}
          <i class="fas fa-sign-out-alt" style={{ fontSize: 30 }}></i>
        </Link>
      </div>
      <div className="mainPage">
        <Wrapper>
          <h1>{user.name} </h1>
          <ul>
            <li > {user.email}</li>
            <li> {user.phone}</li>
            <li>{user.suburb}</li>
            <li>{user.services}</li>
          </ul>
        </Wrapper>
      </div>
    </div>
  );
};

export default Profile;
