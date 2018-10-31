import React from 'react';
import Burger from './../../Burger/Burger';
import classes from './CheckoutSummary.module.css';
import Button from './../../UI/Button/Button';

const checkoutSummary = (props) => {
  return (
    <div className={classes.CheckoutSummary}>
      <h1>it should taste well</h1>
      <Burger ingridients={props.ingridients}/>
      <Button btnType="Danger">Cancel</Button>
      <Button btnType="Success">Continue</Button>
    </div>
  );
}

export default checkoutSummary;