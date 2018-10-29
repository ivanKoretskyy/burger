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
      <p>
        <strong>$ {props.totalPrice.toFixed()}</strong>
      </p>
      {controls.map(el => (
        <BuildControl
          type={el.type}
          label={el.label}
          key={el.type}
          disabled={props.ingridients[el.type] < 1}
          addIngridient={() => props.addIngridient(el.type)}
          removeIngridient={() => props.removeIngridient(el.type)}
        />
      ))}
      <button
        className={classes.OrderButton}
        disabled={!props.isPurchasable}
        onClick={props.order}
      >
        ORDER NOW
      </button>
    </div>
  );
};
export default buildControls;
