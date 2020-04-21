import React, { useState } from "react";
//import { withRouter } from 'react-router-dom';
import API from "../../utils/API";
import "./login.css";

export default function Login(props) {
  const [userData, setUserData] = useState([]);
  const [formObject, setFormObject] = useState({});

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formObject);
    API.checkUser({
      email: formObject.email,
      password: formObject.password,
    })
      .then((res) => {
        console.log(res.data);
          props.history.push("/"+res.data.id);
        
      })
      .catch((err) => console.log(err));
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }
  function handleSingUp(event) {
    event.preventDefault();
    console.log(formObject);
    props.history.push("/signup");
  }

  return (
    <form className="form-signin">
      <h1 className="signinTitle">Sign in here</h1>
      <label htmlFor="inputEmail" className="sr-only">
        Email address
      </label>
      <input
        type="email"
        id="inputinEmail"
        name="email"
        onChange={handleInputChange}
        className="form-control"
        placeholder="Email address"
        required
        autoFocus
      />
      <label htmlFor="inputPassword" className="sr-only">
        Password
      </label>
      <input
        type="password"
        onChange={handleInputChange}
        id="inputinPassword"
        className="form-control"
        placeholder="Password"
        name="password"
        required
      />
      <div className="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me" /> Remember me
        </label>
      </div>
      <button
        className="btn btn-lg btn-primary btn-block"
        type="submit"
        onClick={handleSubmit}
      >
        Sign in
      </button>
      <button
        className="btn btn-lg btn-secondary btn-block"
        onClick={handleSingUp}
      >
        Sign Up
      </button>
      <p className="mt-5 mb-3 text-muted">&copy; Stronger Comunity 2020</p>
    </form>
  );
}
