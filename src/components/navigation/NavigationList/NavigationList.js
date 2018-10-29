import React from "react";
import classes from "./NavigationList.module.css";
import NavigationItem from "../NavigationItem/NavigationItem";

const navigationList = () => {
  return (
    <ul className={classes.NavigationList}>
      <NavigationItem link="/" active={true}>
        Burger Builder
      </NavigationItem>
      <NavigationItem link="/">Checkout</NavigationItem>
    </ul>
  );
};

export default navigationList;
