import React, { useEffect, useState } from "react";
import { logoutUser } from "../../actions/auth";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import API from "../../utils/API";
import Helper from "../helper/Helper";
import "./style.css";
import Moment from "react-moment";
import Wrapper from "../../components/wrapper/wrapper";
import GetHelpCard from "../../components/GetHelpCard/GetHelpCard";

const Search = (props) => {
  const [searchResult, setSearchResult] = useState([]);
  const [services, setservice] = useState([]);
  const [search, setSearch] = useState("");
  const [user, setUser] = useState({});
  const id = sessionStorage.getItem("çurrentUserId");

  useEffect(() => {
    API.getuserDetails(id).then((res) => setUser(res.data));
    // .then(getAllVUllWithService());
  }, [searchResult]);

  function handleInputChange(event) {
    setSearch(event.target.value);
    console.log(search);
  }

  function handleSubmit(event) {
    event.preventDefault();
    searchchSub();
  }
  function searchchSub() {
    API.getUsersinSuburb(search)
      .then((res) => setSearchResult(res.data))
      .catch((err) => console.log(err));
  }

  //function to get all vul with theie required services
  function getAllVUllWithService() {
    API.getUsersWithService()
      .then((res) => console.log(res.data))
      // .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }

  function checkuserService(id) {
    API.getAllServices().then((res) => {
      setservice(res.data);
      console.log(res);
      const updatedservice = services.filter((service) => service._id == id);
      API.chechService({ _id: updatedservice.id })
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));
    });
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
        <h1 className="greetingUser">Welcome: {user.name}</h1>

        <input
          style={{ marginTop: 10 }}
          className="searchBar"
          type="search"
          id="inputinSearch"
          name="search"
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

        <Wrapper>
          {searchResult.map((user) => (
            <GetHelpCard
              key={user._id}
              id={user._id}
              name={user.name}
              suburb={user.suburb}
              email={user.email}
              phone={user.phone}
              services={user.services.map((service) => (
                <div key={service._id}>
                  <p style={{color: service.isChecked ? "lightgrey" : "teal"}}>
                    <strong>{service.name}</strong>{" "}
                    <input
                      key={service._id}
                      type="checkbox"
                      onChange={() => checkuserService(service._id)}
                    />
                    {<br></br>}
                    {service.details}
                  </p>
                </div>
              ))}
            />
          ))}
        </Wrapper>
      </div>
    </div>
  );
};

export default Search;
