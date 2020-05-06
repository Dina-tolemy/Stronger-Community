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

  function DeleteUserAccount(id) {
    API.deleteUserAccount(id)
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
      .then((window.location.href = "./"))
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
                      className="far fa-envelope"
                      style={{ fontSize: 30, color: "teal" }}
                    >
                      {" "}
                    </i>{" "}
                    {user.email}
                  </li>
                  <li>
                    {" "}
                    <i
                      className="fas fa-phone"
                      style={{ fontSize: 30, color: "teal" }}
                    >
                      {" "}
                    </i>{" "}
                    {user.phone}
                  </li>
                  <li>
                    {" "}
                    <i
                      className="fas fa-home"
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
            <button
              className="btn-danger"
              style={{ float: "right", margin: 6, borderRadius: 5 }}
              onClick={()=>{DeleteUserAccount(id)}}
            >
              Delete account
            </button>
          </div>
        </Wrapper>
      </div>
    </div>
  );
};

export default Profile;
