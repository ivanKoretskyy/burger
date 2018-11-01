import React from "react";
import classes from "./Button.module.css";

const actionButton = props => {
  let buttonClasses =[classes.Button,classes[props.btnType]];
  if(props.disabled) {
    buttonClasses.push(classes.Disabled)
  }
  return (
    <button
      className={buttonClasses.join(' ')}
      disabled={props.disabled}
      onClick={props.clicked}
    >
      {props.children}
    </button>
  );
};

export default actionButton;
