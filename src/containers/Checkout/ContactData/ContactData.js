import React, { Component } from 'react';
import classes from './ContactData.module.css';
import Button from '../../../components/UI/Button/Button';
import axiosOrder from '../../../axios-orders';
import Spiner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';

class ContactData extends Component {
  alive;
  state = {
    orderForm: {
      name: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Name',
         
        },
        value: ''
      },
      email:{
        elementType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'your e-mail',
        },
        value: ''
      },
   
        street: {
          elementType: 'input',
          elementConfig: {
            type: 'text',
            placeholder: 'streetAddress',
          },
          value: ''
        },
        deliveryMethod: {
          elementType: 'select',
          elementConfig: {
           options: [
             {value: 'fastest', displayValue: 'Fastes'},
             {value: 'cheapest', displayValue: 'Cheapest'},
           ]
          },
          value: 'fastest'
        },      
    },
    loading: false
  }
  orderHandler = (event) => {
    event.preventDefault();

   // this.setState({ loading: true });
   const orderForm = {...this.state.orderForm};
   const contact = {};
   for(let el in orderForm) {
     contact[el] = orderForm[el].value
   }

    const data = {
      ingridients: this.props.ingridients,
      price: this.props.totalPrice,
      customer: contact
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
  propsChangeHandler(event, element) {
    const orderForm = {...this.state.orderForm};
    const updatedElement = {...orderForm[element]};
    orderForm[element] = updatedElement;
    updatedElement.value = event.target.value;
    this.setState({orderForm})
  }
  render() {

    const elements = Object.keys(this.state.orderForm).map(el => {
      return {
        id: el,
        config: this.state.orderForm[el]
      }
    });
    const inputs = elements.map(el => {
      return (
        <Input
          key={el.id}
          elementType={el.config.elementType}
          elementConfig={el.config.elementConfig}
          value={el.config.value}
          label={el.config.elementConfig.placeholder}
          propsChange={(event)=>this.propsChangeHandler(event,el.id )}/>
      );
    })

    let form = (
      <form onSubmit={this.orderHandler}>
     {inputs}
     
      <Button inputtype="button" btnType="Success" clicked={this.orderHandler}>ORDER</Button>
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