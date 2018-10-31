import React, { Component } from 'react';

class ContactData extends Component {
  state = {
    name: null,
    email: null,
    address: {
      street: null,
      zipcode: null
    }
  }

  render() {
    return (
      <div>
        <h4>Enter your Contact Data</h4>
        <form>
          <input type="text" name="name" placeholder="Your name"/>
          <input type="email" name="email" placeholder="Your email"/>
          <input type="text" name="street" placeholder="street"/>
          <input type="text" name="zip" placeholder="zip"/>
          <Button btnType="Success">ORDER</Button>
        </form>
      </div>
    );
  }
}

export default ContactData;