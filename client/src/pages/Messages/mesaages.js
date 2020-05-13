import React, { useEffect, useState } from "react";
import API from "../../utils/API";
import Wrapper from "../../components/wrapper/wrapper";
import NavBar from "../../components/inNeedNavBar/inNeednavbar";
import Logonav from "../../components/logo/logo";
import Footer from "../../components/Footer/footer";
import DeletButton from "../../components/DeleteButton/deletebutton";
import "./style.css"
const Messages = (props) => {
  const id = sessionStorage.getItem("çurrentUserId");

  const [user, setUser] = useState({});
  const [userMsg, setUserMsg] = useState([]);

  useEffect(() => {
    API.getuserDetails(id)
      .then((res) => setUser(res.data))
      .then(getUserDetailwithmsgs)
      .catch((err) => console.log(err));
  }, []);

  function getUserDetailwithmsgs() {
    API.getUserOwnMsg(id)
      .then((res) => setUserMsg(res.data[0].msgs))
      .then(console.log(userMsg))
      .catch((err) => console.log(err));
  }
  function deleteMsg(id) {
    API.deletAmsg(id)
      .then((res) => console.log(res))
      .then(getUserDetailwithmsgs)
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <NavBar />
      <Logonav />
      <div className="mainPage">
        <h1 className="helpermaintitle">{user.name}'s current Messages</h1>
        <Wrapper>
          {userMsg.map((Msg) => (
            <div className="col-sm-12 col-md-6">
              <DeletButton 
               key={Msg._id}
               id={Msg._id}
               onClick={() => deleteMsg(Msg._id)}
              />
              <div className="card msgCard">{Msg.body}</div>
            </div>
          ))}
        </Wrapper>
      </div>
      <Footer />
    </div>
  );
};

export default Messages;
