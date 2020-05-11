import React, { useEffect, useState } from "react";
import { logoutUser } from "../../actions/auth";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import API from "../../utils/API";
import "./style.css";
import Wrapper from "../../components/wrapper/wrapper";
import GetHelpCard from "../../components/GetHelpCard/GetHelpCard";
import NavBar from "../../components/Helpernabar/HeplerNavbar";
import Logonav from "../../components/logo/logo";
import Footer from "../../components/Footer/footer"

const Search = (props) => {
  const [searchResult, setSearchResult] = useState([]);
  const [services, setservice] = useState([]);
  const [search, setSearch] = useState("");
  const [user, setUser] = useState({});
  const id = sessionStorage.getItem("çurrentUserId");
  const [msg, setmsg] = useState("");

  useEffect(() => {
    API.getuserDetails(id).then((res) => setUser(res.data));
  }, []);

  function handleInputChange(event) {
    setSearch(event.target.value);
    console.log(search);
  }

  function handleSubmit(event) {
    event.preventDefault();
    searchchSub();
  }

  function searchchSub() {
    setSearchResult([]);
    API.getUsersinSuburb(search)
      .then((res) => {
        if (!res.data[0]) {
          setmsg("Sorry, No current users in this suburb.");
        } else {
          setmsg("");
          setSearchResult(res.data);
        }
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }

  function viewUser(id) {
    props.history.push("/" + id);
  }

  return (
    <div>
      <NavBar />
      <Logonav />
      <div className="mainPage">
        <h1 className="helpermaintitle">Search your suburb for more details</h1>
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
        <div className="seracherrormsg">{msg}</div>
        <Wrapper>
          {searchResult.map((user) => (
            <div className= "col-sm-12  col-md-6  col-lg-4">
              <GetHelpCard key={user._id} id={user._id} name={user.name} />
              <button
                class="viewButton"
                key={user._id}
                id={user._id}
                onClick={() => viewUser(user._id)}
              >
                View
              </button>
            </div>
          ))}
        </Wrapper>
      </div>
      <Footer/>
    </div>
  );
};

export default Search;
