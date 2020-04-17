import React, { useState }from "react";
import API  from '../../utils/API';
import "./signup.css";
import { Link } from "react-router-dom";

function SignUp () {
   /* const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [suburb, setSuburb] = useState("");
    const [phone, setPhone] = useState("");*/

    const [userData, setUserData]=useState([]);
    const [formObject, setFormObject] = useState({});


    function handleInputChange(event){

      const { name, value } = event.target;
      setFormObject({...formObject, [name]: value})
    }

 function  handleSubmit(event) {
    event.preventDefault();
    API.saveUser({
      name: formObject.name,
      email: formObject.email,
      phone: formObject.phone,
      suburb:formObject.suburb,
      password:formObject.password
    })
      .then(res => console.log(res))
      ;
    
  }


  function handleuserLogin(event) {
    event.preventDefault();
    console.log(formObject);
    //props.history.push('/')
  }

    return (
      <form  className="form-signup">
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
        <button className="btn btn-primary gethelpButton btn-block"
         type="submit"
         disabled={!(formObject.name && formObject.email &&formObject.password)}
         onClick={handleSubmit}>
          Sign up for help
        </button>
        <button className="btn btn-primary helpButton btn-block" onClick={handleuserLogin}>
          Sign up to help
        </button>
        <p className="mt-5 mb-3 text-muted">&copy; Stronger Comunity 2020</p>
      </form>
    );
  
}

export default SignUp;
