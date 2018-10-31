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
  render() {
    return (
       <div>
         <CheckoutSummary ingridients={this.state.ingridients} />
       </div>
    );
  }

} 

export default Checkout;