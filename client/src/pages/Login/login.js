import React, { useState } from "react";
import API from "../../utils/API";
import "./login.css";
import Picturenav from "../../components/mainnavbar/mainnavbar";
import Footer from "../../components/Footer/footer"

export default function Login(props) {
  const [userData, setUserData] = useState([]);
  const [formObject, setFormObject] = useState({});
  const [error, seterror] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    API.checkUser({
      email: formObject.email,
      password: formObject.password,
    })
      .then((res) => {
        // store the token in session storage
        sessionStorage.setItem("çurrentUserId", res.data.id);

        if (res.data.userType === "Helper") {
          props.history.push("/Helper");
        } else if (res.data.userType === "getHelp") {
          props.history.push("/Main");
        }
      })
      .catch((err) => {
        console.log(err);
        seterror("Wrong email or password!!");
      });
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
      <div className="row">
        <div className="MainPageCard card col-sm-12 col-lg-6 ">
          <div className="card-content">
            <p className="projectDescription">
              {" "}
            <p>  In these difficult times we should all be there for each other.</p>
            <p>  Here in stronger community, we let you help those in need, an elderly person who can't get his daily requirements or a person who lost his job and in need of  help, so, if
              you feel you can give back to your community sign in and see what
              you can do.</p><p>On the other side if you in need of any kind of help sign up and let your community help you.</p>
            </p>
          </div>
        </div>
        <div className="col-sm-12 col-lg-6">
          <form className=" form-signin">
            <h2 className="signInTitle">Sign in to Stronger Community</h2>
            <p>
              Don't have an account  {" "}<a style={{color:"#DA505D",fontSize:18}} href="/signup">{" "} Sign up Here</a>
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
            <p className="error"> {error}</p>
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

            <p className="mt-5 mb-3 text-muted">
              &copy; Stronger Comunity 2020
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
