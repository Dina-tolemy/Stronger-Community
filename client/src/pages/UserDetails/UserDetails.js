import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, useParams } from "react-router-dom";
import API from "../../utils/API";
import Wrapper from "../../components/wrapper/wrapper";
import DetailsCard from "../../components/detailscard/details";
import "./style.css";
import NavBar from "../../components/Helpernabar/HeplerNavbar";
import Logonav from "../../components/logo/logo";
import Footer from "../../components/Footer/footer";

const UserDetails = (props) => {
  const [user, setUser] = useState({});
  const [userService, setUserService] = useState([]);
  const [msgForm, setmsgForm] = useState({});
  const[msg,setMsg]=useState("");
  // const helperId = sessionStorage.getItem("çurrentUserId");
  const [userEmail, setUserEmail] = useState({
    recipient: "dina.a.tolemy@gmail.com",
    sender: "dina.a.tolemy@gmail.com",
    subject: "Help with your service",
    text: `Hi , 
    some one has shown interst to help you with your service on our application, they will be contacting you soon`,
  });
  const { id } = useParams();

  useEffect(() => {
    API.getUserOwnService(id).then((res) => setUserService(res.data[0]));
  }, [userService]);


  function handleInputChange(event) {
    const { name, value } = event.target;
    setmsgForm({ ...msgForm, [name]: value });
  }

  function handleFormSubmit(event) {
    event.preventDefault();

    API.sendAmsg(id, {
      body:msgForm.body
    })
      .then((res) => console.log(res, msgForm))
      .then(setmsgForm({...msgForm}))
      .then(() => setMsg("Message sent"))
      .catch((err) => console.log(err));
  }

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

  function sendMsg(id){
    API.sendAmsg(id)
  }

  function sendEmail() {
    fetch(
      `http://localhost:3001/send-email?recipient=${userEmail.recipient}&sender=${userEmail.sender}&topic=${userEmail.subject}&text=${userEmail.text}`
    ) //query string url
      .then(console.log("email sent"))
      .catch((err) => console.error(err));
  }

  return (
    <div className="helperMainDiv">
      <NavBar />
      <Logonav />
      <div className="mainPage">
        <h1 className="helpermaintitle">
          {userService?.name} Profile Informaion
        </h1>

        <Wrapper>
          <DetailsCard
            key={userService?._id}
            id={userService?._id}
            name={userService?.name}
            suburb={userService?.suburb}
            email={userService?.email}
            phone={userService?.phone}
            services={userService?.services?.map((service) => (
              <div  style={{ color: service.isChecked ? "lightgrey" : "grey" }}>
                <strong>{service.name}</strong> <br></br>
                {service.details}
                <div className="row">
                  <button
                    disabled={service.isChecked}
                    className=" btn detailsButtons"
                    onClick={() => checkuserService(service._id)}
                  >
                    Help
                  </button>
                  <button
                    className="btn detailsButtons"
                    onClick={() => sendEmail()}
                  >
                    Email
                  </button>
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control"
                    placeholder="Enter your Message here"
                    rows="4"
                    style={{marginTop:10,  fontSize: 14 ,width:"50%"}}
                    name="body"
                    required
                    onChange={handleInputChange}
                  />  
                </div>
                <button className="btn detailsButtons" onClick={handleFormSubmit}>Send Msg</button>
                
              </div>
            ))}
            
          />
        </Wrapper>
        <p className="successMsg">{msg}</p>
        <div className="col-sm-12">
          <div className="card noteCard">
            <div className="card-content">
              <strong className="notemsg">Note:</strong>
              <p>
                Faded color requests are pending, and assigned to another helper
                now.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UserDetails;
