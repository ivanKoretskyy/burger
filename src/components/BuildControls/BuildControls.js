import React from "react";
import classes from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Meat", type: "meat" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" }
];

const buildControls = props => {
  return (
    <div className={classes.BuildControls}>
      {controls.map(el => (
        <BuildControl
          type={el.type}
          label={el.label}
          key={el.type}
          addIngridient={() => props.addIngridient(el.type)}
        />
      ))}
    </div>
  );
};
export default buildControls;
