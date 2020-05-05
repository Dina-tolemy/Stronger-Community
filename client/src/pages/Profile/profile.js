import React, { useEffect, useState } from "react";
import API from "../../utils/API";
import Wrapper from "../../components/wrapper/wrapper";
import NavBar from "../../components/Helpernabar/HeplerNavbar";
import "./style.css"

const Profile = (props) => {
  const [user, setUser] = useState({});
  const id = sessionStorage.getItem("çurrentUserId");
  useEffect(() => {
    API.getuserDetails(id)
   .then((res) => setUser(res.data));
  }, [user]);

  function checkuserService(id) {
    API.chechService(id)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }
  return (
    <div className="helperMainDiv">
      <NavBar />
      <div className="mainPage">
        <Wrapper>
        <div className="col-sm-12">
            <div className="card">
              <div className="card-content">
                <h1 className="nameTitle">{user.name} </h1>
                <ul className="profileDetails">
                  <li>
                    {" "}
                    <i
                      class="far fa-envelope"
                      style={{ fontSize: 30, color: "teal" }}
                    >
                      {" "}
                    </i>{" "}
                    {user.email}
                  </li>
                  <li>
                    {" "}
                    <i
                      class="fas fa-phone"
                      style={{ fontSize: 30, color: "teal" }}
                    >
                      {" "}
                    </i>{" "}
                    {user.phone}
                  </li>
                  <li>
                    {" "}
                    <i
                      class="fas fa-home"
                      style={{ fontSize: 30, color: "teal" }}
                    >
                      {" "}
                    </i>{" "}
                    {"  "}
                    {user.suburb}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Wrapper>
      </div>
    </div>
  );
};

export default Profile;
