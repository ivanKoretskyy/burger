import React from "react";
import classes from "./Toolbar.module.css";
import Logo from "../Logo/Logo";
import NavigationList from "./../NavigationList/NavigationList";

const toolbar = props => {
  return (
    <header className={classes.Header}>
      <div>Menu</div>
      <Logo />
      <NavigationList />
    </header>
  );
};

export default toolbar;
