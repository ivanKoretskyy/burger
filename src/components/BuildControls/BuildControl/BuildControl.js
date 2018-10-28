import React from "react";
import classes from "./BuildControl.module.css";

const buildControl = props => {
  return (
    <div className={classes.BuildControl}>
      <div className={classes.Label}>{props.Label}</div>
      <button className={classes.Less}>Less</button>
      <button className={classes.More} onClick={props.addIngridient}>
        More
      </button>
    </div>
  );
};

export default buildControl;
