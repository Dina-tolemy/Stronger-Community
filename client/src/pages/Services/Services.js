import React, { useEffect, useState } from "react";
import API from "../../utils/API";
import UserCard from "../../components/getHelpServiceCard/getHelpServicecard";
import Wrapper from "../../components/wrapper/wrapper";
import DeleteButton from "../../components/DeleteButton/deletebutton";
import NavBar from "../../components/inNeedNavBar/inNeednavbar"

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
      <NavBar/>

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
