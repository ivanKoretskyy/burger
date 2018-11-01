import React, { Component } from 'react';
import classes from './ContactData.module.css';
import Button from '../../../components/UI/Button/Button';
import axiosOrder from '../../../axios-orders';
import Spiner from '../../../components/UI/Spinner/Spinner';

class ContactData extends Component {
  alive;
  state = {
    contact: {
      name: 'Ivan',
      email: 'ivan@ivan.com',
      address: {
        street: 'zhovkivska',
        zipcode: '332233'
      }
    },
    loading: false
  }
  orderHandler(event) {
    //event.preventDefault();

   // this.setState({ loading: true });
    const data = {
      ingridients: this.props.ingridients,
      price: this.props.totalPrice,
      customer: this.state.contact
    };
    console.log(this.alive);
    axiosOrder.post("/orders.json", data).then(
      res => {
        console.log(this.alive)
        this.setState({ loading: false });
        this.props.history.push('/burger');
      },
      err => {
        this.setState({ loading: false});
      }
    );
  }
  componentDidMount() {
    this.alive= true
  }
  componentWillUnmount() {
    console.log('willUnmount Contact data');
    this.alive = false
  }
  render() {
    let form = (
      <form>
      <input className={classes.Input} type="text" name="name" placeholder="Your name"/>
      <input className={classes.Input} type="email" name="email" placeholder="Your email"/>
      <input className={classes.Input} type="text" name="street" placeholder="street"/>
      <input className={classes.Input} type="text" name="zip" placeholder="zip"/>
      <Button type="button" btnType="Success" clicked={(e) => {e.preventDefault(); this.orderHandler()}}>ORDER</Button>
    </form>
    );
    if (this.state.loading) {
      form = <Spiner />
    }
    return (
      <div className={classes.ContactData}>
        <h4>Enter your Contact Data</h4>
       {form}
      </div>
    );
  }
}

export default ContactData;