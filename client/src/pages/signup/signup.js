import React, { useEffect, useState } from "react";
import API from "../../utils/API";
import "./signup.css";
import Picturenav from "../../components/mainnavbar/mainnavbar";
import { useForm } from "react-hook-form";
import Footer from "../../components/Footer/footer";

function SignUp() {
  const [formObject, setFormObject] = useState({});
  const [error, seterror] = useState("");
  const { register, errors } = useForm();

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
      password2: formObject.password2,
      userType: "getHelp",
    })
      .then((res) => seterror("Sign up successfully"))
      .catch((err) => {
        console.log(err);
        seterror("Check your data again something is wrong");
      });
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
      password2: formObject.password2,
      userType: "Helper",
    })
      .then((res) => console.log(formObject))
      .catch((err) => {
        console.log(err);
        seterror("Check your data again something is wrong");
      })
      .then((window.location.href = "./"));
  }

  return (
    <div className="signUpdiv">
      <Picturenav />

      <form className="form-signup">
        <a
          style={{ color: "#DA505D", fontSize: 18, textAlign: "center" }}
          href="/"
        >
          Back to sign in
        </a>
        <input
          type="name"
          id="inputName"
          name="name"
          placeholder="Enter your name here "
          required
          autoFocus
          onChange={handleInputChange}
          ref={register({
            validate: (value) => value !== " " || "Enter a name!",
          })}
        />
        {errors.name && errors.name.message}

        <input
          type="email"
          id="inputEmail"
          name="email"
          placeholder="Enter your Email here"
          required
          autoFocus
          onChange={handleInputChange}
          ref={register({
            required: "Required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "invalid email address",
            },
          })}
        />
        {errors.email && errors.email.message}
        <input
          type="text"
          id="inputSub"
          name="suburb"
          placeholder="Enter your Suburb here"
          required
          autoFocus
          onChange={handleInputChange}
        />
        <input
          id="inputPhone"
          name="phone"
          type="number"
          inputmode="numeric"
          placeholder="Enter your phone number here"
          required
          autoFocus
          onChange={handleInputChange}
        />
        <input
          type="password"
          id="inputPassword"
          name="password"
          placeholder="password min of 6 didgits"
          required
          autoFocus
          onChange={handleInputChange}
          ref={register({
            required: "Required",
            pattern: {
              minLength: 6,
              message: "Password has to be more than 6 digits",
            },
          })}
        />
        {errors.password && errors.password.message}
        <input
          type="password"
          id="inputPassword2"
          name="password2"
          placeholder="Rewrite password here"
          required
          autoFocus
          onChange={handleInputChange}
          ref={register({
            required: "Required",
            pattern: {
              minLength: 6,
              message: "Password has to be more than 6 digits",
            },
          })}
        />
        <p className="error">{error}</p>
        <button
          className="btn  gethelpButton btn-block"
          type="submit"
          disabled={
            !(formObject.name && formObject.email && formObject.password)
          }
          onClick={handleSubmit}
        >
          Needs Help
        </button>
        <button
          disabled={
            !(formObject.name && formObject.email && formObject.password)
          }
          className="btn  helpButton btn-block"
          onClick={handleHelpersignUp}
        >
          Want to Help
        </button>
        <p className="mt-3 mb-3 text-muted">&copy; Stronger Comunity 2020</p>
      </form>
      <Footer />
    </div>
  );
}

export default SignUp;
