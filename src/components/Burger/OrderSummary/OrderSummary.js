import React from "react";
import ActionButton from "../../UI/Button/Button";

const orderSummary = props => {
  const ingridients = Object.keys(props.ingridients).map(el => {
    return (
      <li key={el}>
        <span style={{ textTransform: "capitalize" }}>{el}</span>:{" "}
        {props.ingridients[el]}
      </li>
    );
  });
  return (
    <>
      <h3>Your Order</h3>
      <p>Divine burger with ingridients:</p>
      <p>
        <strong>Total Price: $ {props.price.toFixed(2)}</strong>
      </p>
      <ul>{ingridients}</ul>
      <ActionButton clicked={props.cancelClicked} btnType="Danger">
        Cancel
      </ActionButton>
      <ActionButton clicked={props.submintClicked} btnType="Success">
        Continue
      </ActionButton>
    </>
  );
};

export default orderSummary;
