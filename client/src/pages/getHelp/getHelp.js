
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import API from "../../utils/API";

const GetHelp  = (props) => {
    const [vul, setVul] = useState({});

    const {id} = useParams()

    useEffect(() => {
        API.getuserDetails(id)
          .then(res => setVul(res.data))
          .catch(err => console.log(err));
      }, [])

    


    return ( <div>
       <h1>
        Welcome Here :{vul.name}
        </h1>
    </div> );
}
 
export default GetHelp;