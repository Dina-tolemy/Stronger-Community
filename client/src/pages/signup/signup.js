import React, { useEffect, useState } from "react";
import API from "../../utils/API";
import "./signup.css";
//import Homenav from '../../components/homePagenav/homenav'
//import { Link } from "react-router-dom";
import Picturenav from "../../components/mainnavbar/mainnavbar"

function SignUp() {
  //const [userData, setUserData] = useState([]);
  const [formObject, setFormObject] = useState({});

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    API.saveUserData({
      name: formObject.name,
      suburb: formObject.suburb,
      email: formObject.email,
      phone: formObject.phone,
      password: formObject.password,
      password2:formObject.password2,
      userType:"getHelp"
    })
      .then(res => console.log(formObject))
      .catch(err => console.log(err))
      .then(
        window.location.href = "./");
  }

  function handleHelpersignUp(event) {
    event.preventDefault();
    console.log(formObject);
    API.saveUserData({
      name: formObject.name,
      suburb: formObject.suburb,
      email: formObject.email,
      phone: formObject.phone,
      password: formObject.password,
      password2:formObject.password2,
      userType:"Helper"
    })
      .then(res => console.log(formObject))
      .then(()=>alert("You Have signed up, Good for you"))
      .catch(err => console.log(err))
      .then(
        window.location.href = "./");
  }

  return (
    <div className="signUpdiv">
      <Picturenav/>
    <form className="form-signup">
      <input
        type="name"
        id="inputName"
        name="name"
        placeholder="Enter your name here "
        required
        autoFocus
        onChange={handleInputChange}
        
      />
      <input
        type="email"
        id="inputEmail"
        name="email"
        placeholder="Enter your Email here"
        required
        autoFocus
        onChange={handleInputChange}
        
      />
      <input
        type="Suburb"
        id="inputSub"
        name="suburb"
        placeholder="Enter your Suburb here"
        required
        autoFocus
        onChange={handleInputChange}
       
      />
      <input
        type="phone"
        id="inputPhone"
        name="phone"
        placeholder="Enter your phone number here"
        required
        autoFocus
        onChange={handleInputChange}
      />
      <input
        type="password"
        id="inputPassword"
        name="password"
        placeholder="Enter your password"
        required
        autoFocus
        onChange={handleInputChange}
        
      />
       <input
        type="password"
        id="inputPassword2"
        name="password2"
        placeholder="Rewrite password here"
        required
        autoFocus
        onChange={handleInputChange}
        
      />
      <button
        className="btn  gethelpButton btn-block"
        type="submit"
        disabled={!(formObject.name && formObject.email && formObject.password)}
        onClick={handleSubmit}
      >
        Sign up for help
      </button>
      <button
       disabled={!(formObject.name && formObject.email && formObject.password)}
        className="btn  helpButton btn-block"
        onClick={handleHelpersignUp}
      >
        Sign up to help
      </button>
      <p className="mt-5 mb-3 text-muted">&copy; Stronger Comunity 2020</p>
    </form>
    </div>
  );
}

export default SignUp;
