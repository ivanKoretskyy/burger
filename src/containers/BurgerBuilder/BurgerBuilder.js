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
import { connect } from 'react-redux';

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
        console.log('set state builder')
        this.setState({ ingridients: res.data });
        console.log('set state builder end')
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
    const amount = this.props.ingridients[type] + 1;
    const ingridients = {
      ...this.props.ingridients,
      [type]: amount
    };
    const totalPrice = this.props.totalPrice + INGRIDIENT_PRICE[type];
    //this.setState({ ingridients, totalPrice });
    this.updatePurchasable(ingridients);
    this.props.onChangeIngridients(ingridients);
    this.props.onChangeTotalPrice(totalPrice);
  };

  removeHandler = type => {
    const amount = this.props.ingridients[type] - 1;
    if (amount < 0) return;
    const ingridients = {
      ...this.props.ingridients,
      [type]: amount
    };
    const totalPrice = this.props.totalPrice - INGRIDIENT_PRICE[type];
    this.setState({ ingridients, totalPrice });
    this.updatePurchasable(ingridients);
    this.props.onChangeIngridients(ingridients);
    this.props.onChangeTotalPrice(totalPrice);
  };

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };
  cancelPurchaseHandler = () => {
    this.setState({ purchasing: false });
  };
  continuePurchaseHandler = () => {
    const ingridients = {...this.props.ingridients};
    const totalPrice = {...this.props.totalPrice};
    this.props.history.push({pathname: '/checkout',state:  {...this.state, ingridients, totalPrice}});

  
  };

  render() {
    let orderSummary = (
      <OrderSummary
        ingridients={this.props.ingridients}
        cancelClicked={this.cancelPurchaseHandler}
        submintClicked={this.continuePurchaseHandler}
        price={this.props.totalPrice}
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
          ingridients={this.props.ingridients}
          cancel={this.cancelPurchaseHandler}
        />
        <BuildControls
          addIngridient={this.addHandler}
          removeIngridient={this.removeHandler}
          ingridients={this.props.ingridients}
          totalPrice={this.props.totalPrice || 112}
          isPurchasable={this.state.isPurchasable}
          order={this.purchaseHandler}
        />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    ingridients: state.ingridients,
    totalPrice: state.totalPrice
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onChangeIngridients: (ingridients) => dispatch({type: 'CHANGE_INGRIDIENTS', payload: ingridients}),
    onChangeTotalPrice: (totalPrice) => dispatch({type: 'CHANGE_TOTAL_PRICE', payload: totalPrice})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BurgerBuilder);
