import React from "react";
import BurgerBuilder from "../../containers/BurgerBuilder/BurgerBuilder";
import classes from "./Layout.module.scss";
import Toolbar from "../navigation/Toolbar/Toolbar";

const layout = props => {
  return (
    <>
      <div className={classes.layout}>
        <Toolbar />
        <main className={classes.main}>
          <BurgerBuilder />
        </main>
      </div>
    </>
  );
};

export default layout;
