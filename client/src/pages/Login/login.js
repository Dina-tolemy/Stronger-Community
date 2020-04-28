import React, { useState } from "react";
import API from "../../utils/API";
import "./login.css";
import Picturenav from "../../components/mainnavbar/mainnavbar";

export default function Login(props) {
  const [userData, setUserData] = useState([]);
  const [formObject, setFormObject] = useState({});

  function handleSubmit(event) {
    event.preventDefault();
    API.checkUser({
      email: formObject.email,
      password: formObject.password,
    })
      .then((res) => {
        if (res.data.userType === "Helper") {
          props.history.push("/Helper");
        } else if (res.data.userType === "getHelp") {
          props.history.push("/" + res.data.id);
        }
      })
      .catch((err) => console.log(err));
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }
  function handleSingUp(event) {
    event.preventDefault();
    props.history.push("/signup");
  }

  return (
    <div className="mainPagediv">
      <Picturenav />
      <form className="form-signin">
        <p>
          Don't have an account <a href="/signup">Sign up Here</a>
        </p>
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
          className="btn btn-lg  signInButton btn-block"
          type="submit"
          onClick={handleSubmit}
        >
          Sign in
        </button>

        <p className="mt-5 mb-3 text-muted">&copy; Stronger Comunity 2020</p>
      </form>
    </div>
  );
}
