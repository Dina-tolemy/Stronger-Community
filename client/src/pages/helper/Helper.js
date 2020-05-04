import React, { useEffect, useState } from "react";
import { logoutUser } from "../../actions/auth";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import API from "../../utils/API";
import GetHelpCard from "../../components/GetHelpCard/GetHelpCard";
import Search from "../search/Search";
import Wrapper from "../../components/wrapper/wrapper";
import Moment from "react-moment";

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
      <div className="sidenav">
        <br></br>
        <Link to="/Helper"><i class='fas fa-home' style={{fontSize:30}}></i></Link>
        <Link to="/Search"> <i className='fas fa-search' style={{fontSize:30}} ></i></Link>
        <Link to="#"> <i className='fas fa-address-card' style={{fontSize:30}}></i></Link>
        <Link to="/" onClick={logoutUser}>
          {" "}
          <i class='fas fa-sign-out-alt' style={{fontSize:30}}></i>
        </Link>
      </div>
      <div className="mainPage">
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
