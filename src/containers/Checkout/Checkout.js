import React, { Component } from 'react';
import CheckoutSummary from './../../components/Order/CheckoutSummary/CheckoutSummary'; 

class Checkout extends Component {
  state = {
    ingridients: {
      meat: 0,
      bacon: 0,
      cheese: 0,
      salad: 0
    },
  }
  cancelHandler =() => {
    this.props.history.goBack()
  }
  continueHandler = () => {
    this.props.history.replace('/checkout/form')
  }
  render() {
    const ingridients = this.props.history.location.state;
    return (
       <div>
         <CheckoutSummary
          ingridients={ingridients}
          cancel={this.cancelHandler}
          continue={this.continueHandler}/>
       </div>
    );
  }

} 

export default Checkout;