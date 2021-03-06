import React, { Component } from 'react';
import CheckoutSummary from './../../components/Order/CheckoutSummary/CheckoutSummary';
import { Route, withRouter } from 'react-router-dom'; 
import ContactData from './ContactData/ContactData';
import { connect } from 'react-redux';

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
    // if( this.props.history.location.state) {
    //   const state = this.props.history.location.state
    //   console.log('----')
    //   this.setState({ingridients: state.ingridients, totalPrice: state.totalPrice})
    //   console.log('++++')
    // }
  }
  continueHandler = () => {
    this.props.history.push('/checkout/contact-data')
  }
  render() {
    const ingridients ={...this.props.ingridients}
    const price = this.props.totalPrice
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

const mapPropsToState = (state) => {
  return {
    ingridients: state.ingridients,
    totalPrice: state.totalPrice
  }
}

export default connect(mapPropsToState)(Checkout);