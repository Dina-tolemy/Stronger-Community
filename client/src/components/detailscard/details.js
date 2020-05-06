import React from "react";
import "./style.css";

function detailsCard(props) {
  /** <li id="liService">
              <strong>Required services: </strong>
            
               {props.services}
          
              <p><strong>{props.services.name}</strong></p>
              <p>{props.services.details}</p>
              </li> */
  return (
    <div className="col-sm-12">
      <div className="detailsCard card">
        <strong className="nameTitle">{props.name}</strong>
        <ul className="detailstable">
          <li id="liSuburb">
            <strong>
              {" "}
              <i class="fas fa-home" style={{ fontSize: 30, color: "teal" }}>
                {" "}
              </i>{" "}
              {props.suburb}
            </strong>
          </li>

          <li id="liPhone">
            <strong>
              {" "}
              <i class="fas fa-phone" style={{ fontSize: 30, color: "teal" }}>
                {" "}
              </i>{" "}
              {props.phone}
            </strong>
          </li>
      
          <li id="liEmail">
            <strong>
              <i
                class="far fa-envelope"
                style={{ fontSize: 30, color: "teal" }}
              >
                {" "}
              </i>{" "}
              {props.email}{" "}
            </strong>
          </li>
          <br></br>
          <li id="liService">
            <strong style={{color:"teal"}}>Required Services: </strong>
            {props.services}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default detailsCard;
