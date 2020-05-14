import React from "react";
import "./style.css";
import Tippy from "@tippy.js/react";
import "tippy.js/dist/tippy.css";

function DeleteBtn(props) {
  return (
    <div>
      <Tippy className="peopleTooltip" content="Delete">
        <span className="delete-btn" {...props} role="button">
          ✗
        </span>
      </Tippy>
    </div>
  );
}

export default DeleteBtn;
