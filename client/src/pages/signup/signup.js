import React, { useState }from "react";
import "./signup.css";

function SignUp (props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [suburb, setSuburb] = useState("");
    const [phone, setPhone] = useState("");


 function  handleSubmit(event) {
    event.preventDefault();
    console.log(email,phone,password,suburb,phone);
    props.history.push('/')
  }

  function handleuserLogin(event) {
    event.preventDefault();
    console.log(email, password);
    props.history.push('/')
  }

    return (
      <form  className="form-signup"onSubmit={handleSubmit}>
        <input
          type="name"
          id="inputName"
          value={name}
          name="name"
          placeholder="Enter your name here "
          required
          autoFocus
          onChange={e => setName(e.target.value)}
        />
        <input
          type="email"
          id="inputEmail"
          value={email}
          name="email"
          placeholder="Enter your Email here"
          required
          autoFocus
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="Suburb"
          id="inputSub"
          value={suburb}
          name="suburb"
          placeholder="Enter your Suburb here"
          required
          autoFocus
          onChange={e => setSuburb(e.target.value)}
        />
        <input
          type="phone"
          id="inputPhone"
          value={phone}
          name="phone"
          placeholder="Enter your phone number here"
          required
          autoFocus
          onChange={e => setPhone(e.target.value)}
        />
        <input
          type="password"
          id="inputPassword"
          value={password}
          name="password"
          placeholder="Enter your password"
          required
          autoFocus
          onChange={e => setPassword(e.target.value)}
        />
        <button className="btn btn-primary gethelpButton btn-block" type="submit">
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
