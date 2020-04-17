import React, { useState } from "react";
import { withRouter } from 'react-router-dom';
import "./login.css"

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 6;
  }

  function handleSubmit(event) {
    validateForm();
    event.preventDefault();
    console.log(email, password);
  }
  function handleSingUp(event) {
    event.preventDefault();
    console.log(email, password);
    props.history.push('/signup')
  }


  return (

    <form className="form-signin" onSubmit={handleSubmit}>
      <h1 className="signinTitle">Sign in here</h1>
      <label htmlFor="inputEmail" className="sr-only">Email address</label>
      <input type="email"
        id="inputinEmail"
        value={email}
        onChange={e => setEmail(e.target.value)}
        className="form-control"
        placeholder="Email address"
        required autoFocus />
      <label htmlFor="inputPassword" className="sr-only">Password</label>
      <input type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        id="inputinPassword"
        className="form-control"
        placeholder="Password"
        required />
      <div className="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me" /> Remember me
        </label>
      </div>
      <button className="btn btn-lg btn-primary btn-block"
        type="submit">Sign in</button>
      <button className="btn btn-lg btn-secondary btn-block"
      onClick={handleSingUp}
      >Sign Up</button>
      <p className="mt-5 mb-3 text-muted">&copy; Stronger Comunity 2020</p>
    </form>
  );
}