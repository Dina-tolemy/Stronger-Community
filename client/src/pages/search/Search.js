import React, { useEffect, useState } from "react";
import { logoutUser } from "../../actions/auth";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import API from "../../utils/API";
import Helper from "../helper/Helper";
import "./style.css";
import Moment from "react-moment";

const Search = (props) => {
  // const [searchResult,setSearchResult]=useState([]);

  const [formObject, setFormObject] = useState({});

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    API.getUsersinSuburb({
      suburb: formObject.suburb,
    })
      .then((res) => console.log(res))
      .then(console.log(formObject.suburb))
      .catch((err) => console.log(err));
  }

  //function to get all vul with theie required services
  function getAllVUllWithService() {
    API.getUsersWithService()
      // .then((res) => setvulUser(res.data))
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <div className="sidenav">
        <h4 className="timeMoment">
          <Moment format="HH:MM">{Date.now()}</Moment>
        </h4>
        <h4 className="timeMoment">
          <Moment format="DD/MM/YY">{Date.now()}</Moment>
        </h4>
        <Link to="/Helper">All people</Link>
        <Link to="#">Search By Suburb</Link>
        <Link to="/" onClick={logoutUser}>
          Logout
        </Link>
      </div>
      <div className="mainPage">
        <h1 className="greetingUser">Welcome Back</h1>

        <input
          style={{ marginTop: 10 }}
          className="searchBar"
          type="search"
          id="inputinSearch"
          name="suburb"
          placeholder="Search by suburb"
          onChange={handleInputChange}
        />
        <button
          style={{ marginTop: 0 }}
          className="btn btn-lg  signInButton"
          type="submit"
          onClick={handleSubmit}
        >
          {" "}
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
