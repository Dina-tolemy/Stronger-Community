import React, { useEffect, useState } from "react";
import { logoutUser } from "../../actions/auth";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import API from "../../utils/API";
import GetHelpCard from "../../components/GetHelpCard/GetHelpCard";
import Search from "../search/Search";
import Wrapper from "../../components/wrapper/wrapper";
import Moment from "react-moment";
import Tippy from "@tippy.js/react";
import 'tippy.js/dist/tippy.css';
import "./helper.css";
import NavBar from "../../components/Helpernabar/HeplerNavbar"

const Helper = (props) => {
  const [vulUser, setvulUser] = useState([]);
  const [services, setservice] = useState([]);
  const [user, setUser] = useState({});
  const id= sessionStorage.getItem('çurrentUserId')
  useEffect(() => {
    API.getuserDetails(id)
      .then((res) => setUser(res.data))
      .then(getAllVUllWithService());
  }, [vulUser]);

  //function to get all vul with theie required services
  function getAllVUllWithService() {
    API.getUsersWithService()
      .then((res) => setvulUser(res.data))
      .catch((err) => console.log(err));
  }

  function checkuserService(id) {
    API.chechService(id)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }
  return (
    <div className="helperMainDiv">
      <NavBar/>
      <div className="mainPage">
        <h1 className="helpermaintitle">Our Community</h1>
        <Wrapper>
          {vulUser.map((user) => (
            <GetHelpCard
              key={user._id}
              id={user._id}
              name={user.name}
              suburb={user.suburb}
              email={user.email}
              phone={user.phone}
              services={user.services.map((service) => (
                <div id={service.id} key={service._id}>
                  <p style={{color: service.isChecked ? "lightgrey" : "teal"}}>
                    <strong>{service.name}  </strong>{" "}
                    <input
                      type="checkbox"
                      onChange={() => checkuserService(service._id)}
                    />
                    {<br></br>}
                    {service.details}
                  </p>
                </div>
              ))}
            />
          ))}
        </Wrapper>
      </div>
    </div>
  );
};

export default Helper;
