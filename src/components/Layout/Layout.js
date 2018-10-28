import React from "react";
import BurgerBuilder from "../../containers/BurgerBuilder/BurgerBuilder";
import classes from "./Layout.module.scss";

const layout = props => {
  return (
    <>
      <div className={classes.layout}>
        <div className={classes.flex}>Toolbar SideDrawer Backdrop</div>
        <main className={classes.main}>
          <BurgerBuilder />
        </main>
      </div>
    </>
  );
};

export default layout;
