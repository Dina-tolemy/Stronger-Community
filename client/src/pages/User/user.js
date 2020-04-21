
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import API from "../../utils/API";
import { json } from "body-parser";

const User = (props) => {
    
    const [user, setUser] = useState({});
   // const [allVull,setAllVull]=useState({});

    const {id} = useParams()

    useEffect(() => {
        API.getuserDetails(id)
          .then(res => setUser(res.data))
          .catch(err => console.log(err));
      }, [])

      function getvul(event) {
          
        API.getVulDetails()
        .then(res => console.log(res))
        .catch(err => console.log(err));
     }


// function getAllVul()
    
    return (
        <div>
       <h1>
        Helllo : {user.name}
        </h1>
        <button onClick={getvul}>click me</button>
       
    </div> );
}
 
export default User;