import React from "react";

export function Input(props) {
    return (
      <div className="form-group">
        <input className="form-control" {...props} 
          style={{ marginBottom: 10,fontSize:22 }} />
      </div>
    );
  }
  
  export function TextArea(props) {
    return (
      <div className="form-group">
        <textarea className="form-control" rows="8"
        style={{ marginBottom: 10,fontSize:22 }} 
        {...props} />
      </div>
    );
  }
  
  export function FormBtn(props) {
    return (
      <button {...props} style={{ float: "right", marginBottom: 10,fontSize:22 }} className="btn  helpButton">
        Submit your request
      </button>
    );
  }
