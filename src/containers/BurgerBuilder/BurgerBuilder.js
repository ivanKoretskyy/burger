import React, { Component } from "react";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/BuildControls/BuildControls";

const INGRIDIENT_PRICE = {
  cheese: 2,
  meat: 1.5,
  salad: 3,
  bacon: 2
};

class BurgerBuilder extends Component {
  state = {
    ingridients: {
      cheese: 0,
      meat: 0,
      salad: 0,
      bacon: 0
    },
    totalPrice: 5
  };

  addHandler = type => {
    const amount = this.state.ingridients[type] + 1;
    const ingridients = {
      ...this.state.ingridients,
      [type]: amount
    };
    const totalPrice = this.state.totalPrice + INGRIDIENT_PRICE[type];
    this.setState({ ingridients, totalPrice });
  };
  removeHandler = type => {
    const amount = this.state.ingridients[type] - 1;
    if (amount < 0) return;
    const ingridients = {
      ...this.state.ingridients,
      [type]: amount
    };
    const totalPrice = this.state.totalPrice - INGRIDIENT_PRICE[type];
    this.setState({ ingridients, totalPrice });
  };

  render() {
    return (
      <div>
        <Burger ingridients={this.state.ingridients} />
        <BuildControls
          addIngridient={this.addHandler}
          removeIngridient={this.removeHandler}
          ingridients={this.state.ingridients}
        />
      </div>
    );
  }
}
export default BurgerBuilder;
