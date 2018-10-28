import React from "react";
import BurgerIngridient from "./BurgerIngridient/BurgerIngridient";
import classes from "./Burger.module.css";

const burger = props => {
  const keys = Object.keys(props.ingridients);
  let  ingridients = keys.flatMap((el, i) => {
    return [...Array(props.ingridients[el])].map((_, i) => {
      return <BurgerIngridient key={el + i} type={el} />;
    });
  });

  if (ingridients && ingridients.length === 0) {
    ingridients = <p>Please add some ingridients</p>;
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngridient type="bread-top" />
      {ingridients}
      <BurgerIngridient type="bread-bottom" />
    </div>
  );
};

export default burger;
