import React from "react";
import "./style.css";

function GetHelpCard(props) {
  return (
    <div className="col-sm-12  col-md-6  col-lg-4">
      <div className="card allvullCard">
        <div className="content">
          <ul>
            <li id="liName">
              <strong>{props.name}</strong>
              
            </li>
            <li id="liSuburb">
              <strong>  {props.suburb}</strong>
            
            </li>
            <li id="liPhone">
              <strong> {props.phone}</strong>
             
            </li>
            <li id="liEmail">
              <strong> {props.email} </strong>
             
            </li>
            <li id="liService">
              <strong>Required services: </strong>
            
               {props.services}
          
              <p><strong>{props.services.name}</strong></p>
              <p>{props.services.details}</p>
              </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default GetHelpCard;
