import React, { useEffect, useState } from "react";
import { logoutUser } from "../../actions/auth";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import API from "../../utils/API";

const Helper = (props) => {
  const [vulUser, setvulUser] = useState({});

  
  useEffect(() => {
    API.getUsersWithService()
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);

  //function to get all vul with theie required services
  function getAllVUllWithService() {
    API.getUsersWithService()
      .then((res) => setvulUser(res.data))
      .catch((err) => console.log(err));
  }

  function getvul(event) {
    API.getVulDetails()
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }
  return (
    <div>
      <div className="sidenav">
        <Link to="/" onClick={logoutUser}>
          Logout
        </Link>
      </div>
      <h1>Helooooo</h1>
      <button onClick={getvul}>test getting all vul data</button>
      <button onClick={getAllVUllWithService}>
        test getting all vul with service
      </button>
    </div>
  );
};

export default Helper;
