import React from "react";
import classes from "./SideDrawer.module.css";
import Logo from "../Logo/Logo";
import NavigationList from "../NavigationList/NavigationList";
import Backdrop from "../../UI/Backdrop/Backdrop";
const sideDrawer = props => {
  const attachedClass = props.showDrawer ? classes.Open : classes.Close;
  return (
    <>
      <Backdrop show={props.showDrawer} clicked={props.closeDrawer} />
      <div className={classes.SideDrawer + " " + attachedClass}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationList />
        </nav>
      </div>
    </>
  );
};
export default sideDrawer;
