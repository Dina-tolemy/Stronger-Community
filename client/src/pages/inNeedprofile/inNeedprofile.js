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

const InNeedProfile = (props) => {
  const [user, setUser] = useState({});
  const id = sessionStorage.getItem("çurrentUserId");
  useEffect(() => {
    API.getuserDetails(id).then((res) => setUser(res.data));
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

export default InNeedProfile;
