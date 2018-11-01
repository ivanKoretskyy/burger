import React, { Component } from "react";
import BurgerBuilder from "../../containers/BurgerBuilder/BurgerBuilder";
import classes from "./Layout.module.scss";
import Toolbar from "../navigation/Toolbar/Toolbar";
import SideDrawer from "../navigation/SideDrawer/SideDrawer";
import Checkout from "../../containers/Checkout/Checkout";
import { Route, Switch, Redirect } from 'react-router-dom';
import Orders from "../../containers/Orders/Orders";

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
          <Switch>
            <Route path='/burger' component={BurgerBuilder} />
            <Route path='/checkout' component={Checkout} />
            <Route path='/orders' component={Orders} />
            <Redirect from='/' to="/burger"></Redirect>
          </Switch>
          </main>
          
        </div>
      </>
    );
  }
}

export default Layout;
