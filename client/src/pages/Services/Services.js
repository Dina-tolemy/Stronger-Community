import React, { useEffect, useState } from "react";
import API from "../../utils/API";
import UserCard from "../../components/getHelpServiceCard/getHelpServicecard";
import Wrapper from "../../components/wrapper/wrapper";
import DeleteButton from "../../components/DeleteButton/deletebutton";
import NavBar from "../../components/inNeedNavBar/inNeednavbar";
import "./style.css";
import Logonav from "../../components/logo/logo";
import Footer from "../../components/Footer/footer"

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
      <NavBar />
      <Logonav />
      <div className="mainPage">
        <h1 className="helpermaintitle">{user.name}'s current requests</h1>
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
        <div className="col-sm-6">
          <div className="card noteCard">
            <div className="card-content">
              <strong className="notemsg">Note:</strong>
              <p>
                If one of your requests color is faded that means it's pending
                now, and someone will contact you soon to help you with it.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};
export default UserServices;
