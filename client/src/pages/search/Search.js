import React, { useEffect, useState } from "react";
import { logoutUser } from "../../actions/auth";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import API from "../../utils/API";
import "./style.css";
import Wrapper from "../../components/wrapper/wrapper";
import GetHelpCard from "../../components/GetHelpCard/GetHelpCard";

import NavBar from "../../components/Helpernabar/HeplerNavbar";

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
  function viewUser(id) {

    console.log("hello");
    props.history.push("/"+id);
  }
  // old map function
  /**  services={user.services.map((service) => (
                <div key={service._id}>
                   <input
                      key={service._id}
                      type="checkbox"
                      onChange={() => checkuserService(service._id)}
                    />
                  <p style={{color: service.isChecked ? "lightgrey" : "teal"}}>
                    <strong>{service.name}</strong>{" "}
                   
                    {<br></br>}
                    {service.details}
                  </p>
                </div>
              ))} */

  return (
    <div>
      <NavBar />
      <div className="mainPage">
        <div>
        <input
          style={{ marginTop: 10 }}
          className="searchBar"
          type="search"
          id="inputinSearch"
          name="search"
          placeholder="Search by suburb"
          onChange={handleInputChange}
        />{" "}
        <button
          style={{ marginTop: 0 }}
          className="btn btn-lg  searchButton"
          type="submit"
          onClick={handleSubmit}
        >
          {" "}
          Search
        </button>
        </div>
        <Wrapper>
          {searchResult.map((user) => (
            <div>
              <GetHelpCard key={user._id} id={user._id} name={user.name} />
              <button class="viewButton" key={user._id} id={user._id} onClick={() => viewUser(user._id)}>
                View
              </button>
            </div>
          ))}
        </Wrapper>
      </div>
    </div>
  );
};

export default Search;
