import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, useParams } from "react-router-dom";
import API from "../../utils/API";
import Wrapper from "../../components/wrapper/wrapper";
import DetailsCard from "../../components/detailscard/details";
import "./style.css";
import NavBar from "../../components/Helpernabar/HeplerNavbar";

const UserDetails = (props) => {
  // const [user, setUser] = useState([]);
  const [userService, setUserService] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    API.getUserOwnService(id).then((res) => setUserService(res.data[0]));
    //.then(getUserservices(id));
    //console.log(userService);
  }, [userService]);

  function checkuserService(id) {
    API.chechService(id)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }
  /* function getUserservices(id){

    API.getUserOwnService(id)
    .then((res)=>setUserService(res.data))
  }*/
  return (
    <div className="helperMainDiv">
      <NavBar />
      <div className="mainPage">
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
                <div style={{color: service.isChecked ? "lightgrey" : "grey" }}>
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
