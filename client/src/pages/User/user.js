import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../../utils/API";
//import { json } from "body-parser";
//import Serviceform from "../../components/submitService/submitService";
import "./user.css";
import {
  Input,
  TextArea,
  FormBtn,
} from "../../components/submitService/submitService";
import { logoutUser } from "../../actions/auth";

const User = () => {
  const [user, setUser] = useState({});
  const [serviceForm, setServiceForm] = useState({});

  const { id } = useParams();
  useEffect(() => {
    API.getuserDetails(id)
      .then((res) => setUser(res.data))
      .catch((err) => console.log(err));
  }, []);

  if (id === null) {
    return null;
  }
  function handleInputChange(event) {
    const { name, value } = event.target;
    setServiceForm({ ...serviceForm, [name]: value });
  }
  function handleFormSubmit(event) {
    event.preventDefault();

    API.submittService(id,{
      name: serviceForm.title,
      details: serviceForm.body,
    })
      .then((res) => console.log(res,serviceForm))
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
        <a href="#services">Main</a>
        <a href="#contact">Messeges</a>
        <a href="/" onClick={logoutUser}>
          Logout
        </a>
      </div>
      <div className="mainPage">
        <h1>Helllo : {user.name}</h1>
        <form className="ServiceForm">
          <Input
            onChange={handleInputChange}
            name="title"
            placeholder="Your service name here (required)"
          />
          <TextArea
            onChange={handleInputChange}
            name="body"
            placeholder="Extra details of the service you need(Optional)"
          />
          <FormBtn onClick={handleFormSubmit}></FormBtn>
        </form>
        <button onClick={getvul}>test</button>
      </div>
    </div>
  );
};

export default User;
