import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../../utils/API";
//import "./user.css";
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
import DeleteButton from "../../components/DeleteButton/deletebutton";

const UserServices = (props) => {
  const id = sessionStorage.getItem("çurrentUserId");
  const [user, setUser] = useState({});
  const [userService, setUserService] = useState([]);

  useEffect(() => {
    API.getuserDetails(id)
      .then((res) => setUser(res.data))
      .then(getUserDetailwithservice)
      .catch((err) => console.log(err));
  }, []);

  function getUserDetailwithservice() {
    API.getUserOwnService(id)
      .then((res) => setUserService(res.data[0].services))
      .then(console.log(userService))
      .catch((err) => console.log(err));
  }
  function deleteService(id) {
    API.deleteService(id)
      .then((res) => console.log(res))
      .then(getUserDetailwithservice)
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <div className="sidenav">
       
        <Link to="/Main">
          <i className="far fa-plus-square" style={{ fontSize: 30 }}></i>
        </Link>
        <Link to="/Myservice">
          <i className="fas fa-server" style={{ fontSize: 30 }}></i>
        </Link>
        <Link to="/Profile"> <i className='fas fa-address-card' style={{fontSize:30}}></i></Link>
        <Link to="/" onClick={logoutUser}>
          <i className="fas fa-sign-out-alt logout" style={{ fontSize: 30 }}></i>
        </Link>
      </div>

      <div className="mainPage">
        <h1 className="greetingUser">{user.name}'s Current Services</h1>
        <Wrapper>
          {userService.map((service) => (
            <div>
              <DeleteButton
                key={service._id}
                id={service._id}
                onClick={() => deleteService(service._id)}
              />
              <UserCard
                key={service._id}
                id={service._id}
                details={service.details}
                name={service.name}
                isChecked={service.isChecked}
              />
            </div>
          ))}
        </Wrapper>
      </div>
    </div>
  );
};
export default UserServices;
