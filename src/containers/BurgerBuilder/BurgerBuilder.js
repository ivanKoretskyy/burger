import React, { Component } from "react";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/BuildControls/BuildControls";

class BurgerBuilder extends Component {
  state = {
    ingridients: {
      cheese: 1,
      meat: 1,
      salad: 1,
      bacon: 1
    }
  };

  addHandler = type => {
    const amount = this.state.ingridients[type] + 1;
    const ingridients = {
      ...this.state.ingridients,
      [type]: amount
    };
    this.setState({ ingridients });
  };

  render() {
    return (
      <div>
        <Burger ingridients={this.state.ingridients} />
        <BuildControls addIngridient={this.addHandler} />
      </div>
    );
  }
}
export default BurgerBuilder;
