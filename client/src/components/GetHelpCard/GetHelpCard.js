import React from "react";
import "./style.css";

function GetHelpCard(props) {
  return (
    <div className="col-sm-12  col-md-6  col-lg-4">
      <div className="card allvullCard">
        <div className="content">
          <i className="fas fa-portrait" style={{ fontSize: 36 }}></i>
          <strong> {props.name}</strong>
        </div>
      </div>
    </div>
  );
        }

export default GetHelpCard;
