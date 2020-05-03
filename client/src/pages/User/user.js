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
import UserCard from "../../components/getHelpServiceCard/getHelpServicecard";
import Wrapper from "../../components/wrapper/wrapper";
import Moment from "react-moment";
import DeleteButton from "../../components/DeleteButton/deletebutton"

const User = (props) => {
  const [user, setUser] = useState({});
  const [serviceForm, setServiceForm] = useState({});
 

  //const { id } = useParams();
  const id= sessionStorage.getItem('çurrentUserId')
  useEffect(() => {
    API.getuserDetails(id)
      .then((res) => setUser(res.data))
      //.then(getUserDetailwithservice)
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
 
  return (
    <div className="userMainDiv">
      <div className="sidenav">
        <h4 className="timeMoment">
          <Moment format="HH:MM">{Date.now()}</Moment>
        </h4>
        <h4 className="timeMoment">
          <Moment format="DD/MM/YY">{Date.now()}</Moment>
        </h4>
        <br></br>
        <Link to="/Main">
          Request service
        </Link>
        <Link to="/Myservice">
          Current Services
        </Link>
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
        {<br></br>}
        <div>
         
        </div>
      </div>
    </div>
  );
};

export default User;
