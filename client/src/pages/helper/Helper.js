import React, { useEffect, useState } from "react";
import { logoutUser } from "../../actions/auth";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import API from "../../utils/API";
import GetHelpCard from "../../components/GetHelpCard/GetHelpCard";
import Search from "../search/Search"

const Helper = (props) => {
  const [vulUser, setvulUser] = useState({});

  useEffect(() => {
    getAllVUllWithService();
  }, [vulUser]);

  //function to get all vul with theie required services
  function getAllVUllWithService() {
    API.getUsersWithService()
      .then((res) => setvulUser(res.data))
      .catch((err) => console.log(err));
  }

  function getvul(event) {
    API.getVulDetails()
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }
  /*    {vulUser.map((user) => (
          <GetHelpCard
            id={user.id}
            key={user.id}
            name={user.name}
            suburb={user.suburb}
            email={user.email}
            phone={user.phone}
          />
        ))} */
  return (
    <div>
      <div className="sidenav">
        <Link to="/Helper">All people with required services</Link>
        <Link to="/Search">Search By Suburb</Link>
        <Link to="/" onClick={logoutUser}>
          Logout
        </Link>
      
      </div>
      <div className="mainPage">
        <h1 className="greetingUser">Welcome Back</h1>
      
        <button onClick={getvul}>test getting all vul data</button>
        <button onClick={getAllVUllWithService}>
          test getting all vul with service
        </button>
      </div>
    </div>
  );
};

export default Helper;
