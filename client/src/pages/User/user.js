import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../../utils/API";
import "./user.css";
import {
  Input,
  TextArea,
  FormBtn,
} from "../../components/submitService/submitService";
import NavBar from "../../components/inNeedNavBar/inNeednavbar";
import Logonav from "../../components/logo/logo";
import Footer from "../../components/Footer/footer"

const User = (props) => {
  const [user, setUser] = useState({});
  const [serviceForm, setServiceForm] = useState({});
  const[msg,setMsg]=useState("")
 

  //const { id } = useParams();
  const id= sessionStorage.getItem('çurrentUserId')
  useEffect(() => {
    API.getuserDetails(id)
      .then((res) => setUser(res.data))
      .catch((err) => console.log(err));
  }, []);

  function handleInputChange(event) {
    const { name, value } = event.target;
    setServiceForm({ ...serviceForm, [name]: value });
  }
  function handleFormSubmit(event) {
    event.preventDefault();

    API.submittService(id, {
      name: serviceForm.title,
      details: serviceForm.details,
    })
      .then((res) => console.log(res, serviceForm))
      .then(setServiceForm({...serviceForm}))
      .then(() => setMsg("Your service Is added successfully"))
      .catch((err) => console.log(err));
  }
 
  return (
    <div className="userMainDiv">
     <NavBar/>
     <Logonav/>
      <div className="mainPage">
      <h1 className="helpermaintitle">Add new service</h1>
        <form className="ServiceForm">
          <Input
            onChange={handleInputChange}
            name="title"
            placeholder="Your service name here (required)"
          />
          <TextArea
            onChange={handleInputChange}
            name="details"
            placeholder="Extra details of the service you need(Optional)"
          />
          <FormBtn onClick={handleFormSubmit}></FormBtn>
        </form>
        {<br></br>}
      </div>
      <div>
         <h3 className="successMsg">{msg}</h3>
        </div>
        <Footer/>
    </div>
  );
};

export default User;
