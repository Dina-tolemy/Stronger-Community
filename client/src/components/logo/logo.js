import React from "react";
import "./style.css";
import Logo from "../Imgs/mlogo.jpg";

const logonav = () => {
  return (
    <div className=" logocontainer col-md-6">
      <img className="logoCard" src={Logo} alt={"img"} />
    </div>
  );
};

export default logonav;
