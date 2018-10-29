import React from "react";
import classes from "./Logo.module.css";
import burgerImage from "../../../assets/images/burger-logo.png";
const logo = props => {
  return (
    <div className={classes.Logo}>
      <img src={burgerImage} />
    </div>
  );
};

export default logo;
