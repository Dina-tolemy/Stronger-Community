import React from "react";
import "./style.css";
import Tippy from "@tippy.js/react";
import "tippy.js/dist/tippy.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function DeleteBtn(props) {
  return (
    <div>
      <Tippy className="allpeopleTooltip" content="Delete this service">
        <span className="delete-btn" {...props} role="button">
          ✗
        </span>
      </Tippy>
    </div>
  );
}

export default DeleteBtn;
