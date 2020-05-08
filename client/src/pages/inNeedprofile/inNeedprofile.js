import React, { useEffect, useState } from "react";
import { logoutUser } from "../../actions/auth";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import API from "../../utils/API";
import GetHelpCard from "../../components/GetHelpCard/GetHelpCard";
import Search from "../search/Search";
import Wrapper from "../../components/wrapper/wrapper";
import Tippy from "@tippy.js/react";
import "tippy.js/dist/tippy.css";
import NavBar from "../../components/inNeedNavBar/inNeednavbar";
import Logonav from "../../components/logo/logo";
import Footer from "../../components/Footer/footer"

const InNeedProfile = (props) => {
  const [user, setUser] = useState({});
  const id = sessionStorage.getItem("çurrentUserId");
  useEffect(() => {
    API.getuserDetails(id).then((res) => setUser(res.data));
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
      <Logonav/>
      <div className="mainPage">
      <h1 className="helpermaintitle">Profile Informaion</h1>
        <Wrapper>
        <div className="col-sm-12">
            <div className="card">
              <div className="card-content">
                <h1 className="nameTitle1">{user.name} </h1>
                <ul className="profileDetails">
                  <li className="card">
                    <br></br>
                    <i
                      className="far fa-envelope"
                      style={{ fontSize: 30, color: "#7F5E93" }}
                    >
                      {" "}
                      {user.email}
                    </i>{" "}
                    <br></br>
                  </li>

                  <li className="card">
                    <br></br>
                    <i
                      className="fas fa-phone"
                      style={{ fontSize: 30, color: "#7F5E93" }}
                    >
                      {" "}
                      {user.phone}
                    </i>{" "}
                    <br></br>
                  </li>
                  <li className="card">
                    <br></br>
                    <i
                      className="fas fa-home"
                      style={{ fontSize: 30, color: "#7F5E93" }}
                    >
                      {" "}
                      {user.suburb}
                    </i>

                    <br></br>
                  </li>
                </ul>
              </div>
            </div>
            <button
              className="btn-danger"
              style={{ float: "right", margin: 6, borderRadius: 5 }}
              onClick={() => {
                DeleteUserAccount(id);
              }}
            >
              Delete account
            </button>
          </div>
        </Wrapper>
      </div>
      <Footer/>
    </div>
  );
};

export default InNeedProfile;
