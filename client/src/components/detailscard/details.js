import React from "react";
import "./style.css";

function detailsCard(props) {
  
  return (
    <div className="col-sm-12">
      <div className="detailsCard card">
        <strong className="nameTitle">{props.name}</strong>
        <ul className="detailstable">
          <li id="liSuburb">
            <strong>
              {" "}
              <i class="fas fa-home" style={{ fontSize: 30, color: "#7F5E93" }}>
                {" "}
              </i>{" "}
              {props.suburb}
            </strong>
          </li>

          <li id="liPhone">
            <strong>
              {" "}
              <i class="fas fa-phone" style={{ fontSize: 30, color: "#7F5E93"}}>
                {" "}
              </i>{" "}
              {props.phone}
            </strong>
          </li>
      
          <li id="liEmail">
            <strong>
              <i
                class="far fa-envelope"
                style={{ fontSize: 30, color: "#7F5E93" }}
              >
                {" "}
              </i>{" "}
              {props.email}{" "}
            </strong>
          </li>
          <br></br>
          <li id="liService">
  <strong style={{color:"#7F5E93"}}>{props.name}'s requests: </strong>
            {props.services}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default detailsCard;
