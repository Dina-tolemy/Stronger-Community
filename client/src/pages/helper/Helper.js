import React, { useEffect, useState } from "react";
import API from "../../utils/API";
import GetHelpCard from "../../components/GetHelpCard/GetHelpCard";
import Wrapper from "../../components/wrapper/wrapper";
import "./helper.css";
import NavBar from "../../components/Helpernabar/HeplerNavbar";
import Logonav from "../../components/logo/logo";
import Footer from "../../components/Footer/footer"

const Helper = (props) => {
  const [vulUser, setvulUser] = useState([]);
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
  return (
    <div className="helperMainDiv">
      <NavBar/>
      <Logonav/>
      <div className="mainPage">
        <h1 className="helpermaintitle">Our Community</h1>
        <Wrapper>
          {vulUser.map((user) => (
            <GetHelpCard
              key={user._id}
              id={user._id}
              name={user.name}
         
            />
          ))}
        </Wrapper>
      </div>
      <Footer/>
    </div>
  );
};

export default Helper;
