import React from "react";
import classes from "./Toolbar.module.css";
import Logo from "../Logo/Logo";
import NavigationList from "./../NavigationList/NavigationList";

const toolbar = props => {
  return (
    <header className={classes.Header}>
      <div onClick={props.showMenu} className={classes.DrawerToggle}>
        <div />
        <div />
        <div />
      </div>
      <Logo />
      <nav className={classes.DesctopOnly}>
        <NavigationList />
      </nav>
    </header>
  );
};

export default toolbar;
