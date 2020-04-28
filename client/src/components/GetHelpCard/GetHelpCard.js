import React from "react";
import "./style.css";

function GetHelpCard(props) {
  return (
    <div className="card allvullCard">
      <div className="content">
        <ul>
          <li>
            <strong>{props.name}</strong>
          </li>
          <li>
            <strong>{props.suburb}</strong>
          </li>
          <li>
            <strong>{props.phone}</strong>
          </li>
          <li>
            <strong> {props.email}</strong>
          </li>
          <li>
            <strong>Required services</strong>
          </li>
          <ul>
            <li>{props.services}</li>
            <input type="checkbox" onChange={props.handleCheck} />
          </ul>
        </ul>
      </div>
    </div>
  );
}

export default GetHelpCard;
