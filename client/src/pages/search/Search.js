import React, { useEffect, useState } from "react";
import { logoutUser } from "../../actions/auth";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import API from "../../utils/API";
import Helper from "../helper/Helper";
import "./style.css";

const Search = (props) => {

  const [search,setSearch]=useState("");
  const [searchResult,setSearchResult]=useState({});

  useEffect(() => {
    if (!search) {
      return;
    }

    API.getUsersinSuburb(search)
      .then(res => {
        if (res.data.length === 0) {
          throw new Error("No results found.");
        }
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        setSearchResult(res.data)
        console.log(searchResult)
      })
      .catch(err => console.log(err));
  }, [search]);

  const handleInputChange = event => {
    setSearch(event.target.value);
    console.log(search)
  };



  //function to get all vul with theie required services
  function getAllVUllWithService() {
   API.getUsersWithService()
     // .then((res) => setvulUser(res.data))
      .then((res)=>console.log(res.data))
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <div className="sidenav">
      <Link to="/Helper">
          All people with required services
        </Link>
        <Link to="#" >
          Search By Suburb
        </Link>
        <Link to="/" onClick={logoutUser}>
          Logout
        </Link>
       
      </div>
      <div className="mainPage">
         
      <h1 className="greetingUser">Welcome Back</h1>

      <input className="searchBar" placeholder="Search by suburb" onChange={handleInputChange}/>

      {
        
      }
     
    </div>
    </div>
  );
};

export default Search;
