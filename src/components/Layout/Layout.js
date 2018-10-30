import React, { Component } from "react";
import BurgerBuilder from "../../containers/BurgerBuilder/BurgerBuilder";
import classes from "./Layout.module.scss";
import Toolbar from "../navigation/Toolbar/Toolbar";
import SideDrawer from "../navigation/SideDrawer/SideDrawer";

class Layout extends Component {
  state = {
    showDrawer: false
  };
  closeSideDrawerHandler = () => {
    this.setState({ showDrawer: false });
  };
  openSideDrawerHandler = () => {
    this.setState({ showDrawer: true });
  };
  render() {
    return (
      <>
        <div className={classes.layout}>
          <Toolbar showMenu={this.openSideDrawerHandler} />
          <SideDrawer
            showDrawer={this.state.showDrawer}
            closeDrawer={this.closeSideDrawerHandler}
          />
          <main className={classes.main}>
            <BurgerBuilder />
          </main>
        </div>
      </>
    );
  }
}

export default Layout;
