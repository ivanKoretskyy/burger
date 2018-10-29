import React from "react";
import classes from "./Button.module.css";

const actionButton = props => {
  return (
    <button
      className={classes.Button + " " + classes[props.btnType]}
      onClick={props.clicked}
    >
      {props.children}
    </button>
  );
};

export default actionButton;
