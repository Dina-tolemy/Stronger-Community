import React from "react";
import Tippy from "@tippy.js/react";
import "tippy.js/dist/tippy.css";

function GetHelpCard(props) {
  return (
    <div className="col-sm-12  col-md-6  col-lg-4">
<Tippy className="peopleTooltip" content="View for user details and requests">
      <div className="card allvullCard">
        <div className="content">
          <i className="fas fa-portrait" style={{ fontSize: 36 }}></i>
          <strong> {props.name}</strong>
        </div>
      </div>
      </Tippy>
    </div>
  );
        }

export default GetHelpCard;