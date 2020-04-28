import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../../utils/API";
import "./user.css";
import {
  Input,
  TextArea,
  FormBtn,
} from "../../components/submitService/submitService";
import { logoutUser } from "../../actions/auth";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

const User = (props) => {
  const [user, setUser] = useState({});
  const [serviceForm, setServiceForm] = useState({});

  const { id } = useParams();
  useEffect(() => {
    API.getuserDetails(id)
      .then((res) => setUser(res.data))
      .catch((err) => console.log(err));
  }, []);

  function handleInputChange(event) {
    const { name, value } = event.target;
    setServiceForm({ ...serviceForm, [name]: value });
  }
  function handleFormSubmit(event) {
    event.preventDefault();

    API.submittService(id, {
      name: serviceForm.title,
      details: serviceForm.details,
    })
      .then((res) => console.log(res, serviceForm))
      .then(() => alert("Your service Is submitted"))
      .catch((err) => console.log(err));
  }
  //function to get all vul with theie required services
  function getAllVUllWithService() {
    API.getUsersWithService()
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }
  //function to get the logged in user details with the service

  function getUserDetailwithservice() {
    API.getUserOwnService(id)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }
  // function getAllVul()
  function getvul(event) {
    API.getVulDetails()
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }
  return (
    <div className="userMainDiv">
      <div className="sidenav">
        <Link to="/" onClick={logoutUser}>
          Logout
        </Link>
      </div>
      <div className="mainPage">
        <h1 className="greetingUser">Welcome: {user.name}</h1>
        <form className="ServiceForm">
          <Input
            onChange={handleInputChange}
            name="title"
            placeholder="Your service name here (required)"
          />
          <TextArea
            onChange={handleInputChange}
            name="details"
            placeholder="Extra details of the service you need(Optional)"
          />
          <FormBtn onClick={handleFormSubmit}></FormBtn>
        </form>
        <button onClick={getvul}>test getting all vul data</button>
        <button onClick={getAllVUllWithService}>
          test getting all vul with service
        </button>
        <button onClick={getUserDetailwithservice}>
          test userDetails with service route
        </button>
      </div>
    </div>
  );
};

export default User;
