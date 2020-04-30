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

const User = (props) => {
  const [user, setUser] = useState({});
  const [serviceForm, setServiceForm] = useState({});
  const [userService, setUserService] = useState([]);

  const { id } = useParams();
  useEffect(() => {
    API.getuserDetails(id)
      .then((res) => setUser(res.data))
      .then(getUserDetailwithservice)
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
      .then((res) => setUserService(res.data[0].services))
      .then(console.log(userService))
      .catch((err) => console.log(err));
  }

  function deleteService(id) {
    API.deleteService(id)
      .then(res => (setUserService(res.data[0].services)))
      .catch(err => console.log(err));
  }
  // function getAllVul()
  function getvul(event) {
    API.getVulDetails()
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }
  /** <button onClick={getvul}>test getting all vul data</button>
        <button onClick={getAllVUllWithService}>
          test getting all vul with service
        </button>
       */
  return (
    <div className="userMainDiv">
      <div className="sidenav">
       
        <Link to="/" onClick={logoutUser}>
          Logout
        </Link>
        <h4 className="timeMoment">
          <Moment format="HH:MM">{Date.now()}</Moment>
        </h4>
        <h4  className="timeMoment">
          <Moment format="DD/MM/YY">{Date.now()}</Moment>
        </h4>
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
          <h1 className="greetingUser">My current services</h1>
          <Wrapper>
            {userService.map((service) => (
              <UserCard
                id={service.id}
                key={service.id}
                details={service.details}
                name={service.name}
                isChecked={service.isChecked}
              />
            ))}
          </Wrapper>
        </div>
      </div>
    </div>
  );
};

export default User;
