import React, { Component } from 'react';
import CheckoutSummary from './../../components/Order/CheckoutSummary/CheckoutSummary';
import { Route, withRouter } from 'react-router-dom'; 
import ContactData from './ContactData/ContactData';

class Checkout extends Component {
  state = {
    ingridients: {
      meat: 0,
      bacon: 0,
      cheese: 0,
      salad: 0
    },
    totalPrice: null
  }
  cancelHandler =() => {
    this.props.history.goBack()
  }
  componentDidMount () {
    if( this.props.history.location.state) {
      const state = this.props.history.location.state
      console.log('----')
      this.setState({ingridients: state.ingridients, totalPrice: state.totalPrice})
      console.log('++++')
    }
  }
  continueHandler = () => {
    this.props.history.push('/checkout/contact-data')
  }
  render() {
    const ingridients ={...this.state.ingridients}
    const price = this.state.totalPrice
    return (
       <div>
         <CheckoutSummary
          ingridients={ingridients}
          cancel={this.cancelHandler}
          continue={this.continueHandler}/>

           <Route
             path={'/checkout/contact-data'}
             render={(props) => (
              <ContactData ingridients={ingridients}
              totalPrice={price} {...props}/>
             )}
           />
       </div>
    );
  }

} 

export default Checkout;