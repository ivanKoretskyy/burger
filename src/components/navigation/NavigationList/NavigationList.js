import React from "react";
import classes from "./NavigationList.module.css";
import NavigationItem from "../NavigationItem/NavigationItem";
import { NavLink } from 'react-router-dom'

const navigationList = (props) => {
  return (
    <ul className={classes.NavigationList}>
      
        <NavigationItem link="/burger">
          Burger Builder
        </NavigationItem>
      
      
     
        <NavigationItem link="/checkout">Checkout</NavigationItem>
        {props.isAuthenticated 
          ? <NavigationItem link="/orders">Orders</NavigationItem>
        : null}
        {!props.isAuthenticated
          ? <NavigationItem link='/auth'>Login</NavigationItem>
          : <NavigationItem link='/logout'>Logout</NavigationItem>
        }
      
    </ul>
  );
};

export default navigationList;
