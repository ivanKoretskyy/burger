import React, { Component } from 'react';
import Order from '../../components/Order/Order';
import axios from 'axios';

class Orders extends Component {
  state = {
    orders: []
  }

  componentDidMount() {
    axios.get("https://burger-ca771.firebaseio.com/orders.json").then(
      res => {
        const orders = Object.keys(res.data).map(el => ({...res.data[el], id:el}));
        this.setState({orders})
      },
      err => console.error(err)
    )
  }

  render() {
    const orders = this.state.orders.map(el => (<Order data={el} key={el.id}/>))
    return(
      <div>
      {orders}
      </div>
    );
  }
}

export default Orders;