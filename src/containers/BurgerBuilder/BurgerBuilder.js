import React, { Component } from "react";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/BuildControls/BuildControls";
import classes from "./BurgerBuilder.module.css";
import Modal from "./../../components/UI/Modal/Modal";
import OrderSummary from "./../../components/Burger/OrderSummary/OrderSummary";
import axiosOrder from "../../axios-orders";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../hoc/withErrorHandler/withErrorHandler";
import axios from "axios";

const INGRIDIENT_PRICE = {
  cheese: 2,
  meat: 1.5,
  salad: 3,
  bacon: 2
};

class BurgerBuilder extends Component {
  state = {
    ingridients: {
      meat: 0,
      bacon: 0,
      cheese: 0,
      salad: 0
    },
    totalPrice: 5,
    isPurchasable: false,
    purchasing: false,
    loading: false
  };
  componentDidMount() {
    axios.get("https://burger-ca771.firebaseio.com/ingridients.json").then(
      res => {
        this.setState({ ingridients: res.data });
      },
      err => console.error(err)
    );
  }

  updatePurchasable = ingridients => {
    const isPurchasable = Object.keys(ingridients)
      .map(el => {
        return ingridients[el];
      })
      .reduce((sum, el) => {
        return el + sum;
      }, 0);
    this.setState({ isPurchasable });
  };

  addHandler = type => {
    const amount = this.state.ingridients[type] + 1;
    const ingridients = {
      ...this.state.ingridients,
      [type]: amount
    };
    const totalPrice = this.state.totalPrice + INGRIDIENT_PRICE[type];
    this.setState({ ingridients, totalPrice });
    this.updatePurchasable(ingridients);
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
    this.updatePurchasable(ingridients);
  };

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };
  cancelPurchaseHandler = () => {
    this.setState({ purchasing: false });
  };
  continuePurchaseHandler = () => {

    this.props.history.push({pathname: '/checkout',state:  this.state.ingridients});

    // this.setState({ loading: true });
    // const data = {
    //   ingridients: this.state.ingridients,
    //   price: this.state.totalPrice,
    //   customer: {
    //     name: "Ivan Koretskyy"
    //   },
    //   address: {
    //     street: "testStreet",
    //     phone: "eewe332r"
    //   }
    // };
    // axiosOrder.post("/orders.json", data).then(
    //   res => {
        
    //     this.setState({ loading: false, purchasing: false });
    //   },
    //   err => {
    //     this.setState({ loading: false, purchasing: false });
    //   }
    // );
  };

  render() {
    let orderSummary = (
      <OrderSummary
        ingridients={this.state.ingridients}
        cancelClicked={this.cancelPurchaseHandler}
        submintClicked={this.continuePurchaseHandler}
        price={this.state.totalPrice}
      />
    );
    if (this.state.loading) {
      orderSummary = <Spinner />;
    }
    return (
      <div>
        <Modal
          show={this.state.purchasing}
          backdropClicked={this.cancelPurchaseHandler}
        >
          {orderSummary}
        </Modal>
        <Burger
          ingridients={this.state.ingridients}
          cancel={this.cancelPurchaseHandler}
        />
        <BuildControls
          addIngridient={this.addHandler}
          removeIngridient={this.removeHandler}
          ingridients={this.state.ingridients}
          totalPrice={this.state.totalPrice}
          isPurchasable={this.state.isPurchasable}
          order={this.purchaseHandler}
        />
      </div>
    );
  }
}
export default withErrorHandler(BurgerBuilder, axiosOrder);
