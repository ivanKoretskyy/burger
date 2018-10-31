import React from "react";
import classes from "./NavigationList.module.css";
import NavigationItem from "../NavigationItem/NavigationItem";
import { NavLink } from 'react-router-dom'

const navigationList = () => {
  return (
    <ul className={classes.NavigationList}>
      
        <NavigationItem link="/burger">
          Burger Builder
        </NavigationItem>
      
      
     
        <NavigationItem link="/checkout">Checkout</NavigationItem>
      
    </ul>
  );
};

export default navigationList;
