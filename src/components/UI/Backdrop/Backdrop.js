import React from "react";
import classes from "./Backdrop.module.css";

const backdrop = props => {
  const backdrop = props.show ? (
    <div className={classes.Backdrop} onClick={props.clicked} />
  ) : null;
  return backdrop;
};

export default backdrop;
