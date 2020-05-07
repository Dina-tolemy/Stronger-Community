import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, useParams } from "react-router-dom";
import API from "../../utils/API";
import Wrapper from "../../components/wrapper/wrapper";
import DetailsCard from "../../components/detailscard/details";
import "./style.css";
import NavBar from "../../components/Helpernabar/HeplerNavbar";

const UserDetails = (props) => {
  const [user, setUser] = useState({});
  const [userService, setUserService] = useState([]);
  // const helperId = sessionStorage.getItem("çurrentUserId");
  const [userEmail, setUserEmail] = useState({
    recipient: userService.email,
    sender: "dina.a.tolemy@gmail.com",
    subject: "Help with your service",
    text: `Hi ${userService.name}, 
    some one has shown interst to help you with your service on our application, they will be contacting you soon`,
  });
  const { id } = useParams();

  useEffect(() => {
    API.getUserOwnService(id).then((res) => setUserService(res.data[0]));
  }, [userService]);

  function getCurrentHelperInfo(helperId) {
    API.getuserDetails(helperId)
      .then((res) => setUser(res.data))
      .then(console.log("this is the user" + user))
      .catch((err) => console.log(err));
  }
  function checkuserService(id) {
    API.chechService(id)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }
  //console.log("the user"+user);
  // console.log(userEmail)

  function sendEmail() {
    fetch(
      `http://127.0.0.1:3001/send-email?recipient=${userEmail.recipient}&sender=${userEmail.sender}&topic=${userEmail.subject}&text=${userEmail.text}`
    ) //query string url
      .catch((err) => console.error(err));
  }

  return (
    <div className="helperMainDiv">
      <NavBar />
      <div className="mainPage">
        <h1 className="helpermaintitle">
          {userService.name} Profile Informaion
        </h1>
        <div className="detailsdiv">
          <Wrapper>
            <DetailsCard
              key={userService._id}
              id={userService._id}
              name={userService.name}
              suburb={userService.suburb}
              email={userService.email}
              phone={userService.phone}
              services={userService?.services?.map((service) => (
                <div
                  style={{ color: service.isChecked ? "lightgrey" : "grey" }}
                >
                  <strong>{service.name}</strong> <br></br>
                  {service.details}
                  <div className="row">
                    <button
                      disabled={service.isChecked}
                      className=" detailsButtons danger btn-success"
                      onClick={() => checkuserService(service._id)}
                    >
                      Help
                    </button>
                    <button
                      className=" detailsButtons danger btn-success"
                      onClick={() => sendEmail()}
                    >
                      Email
                    </button>
                  </div>
                </div>
              ))}
            />
          </Wrapper>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
