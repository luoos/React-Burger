import React from 'react';

import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import classes from './ContactData.css';
import axios from '../../../axios-orders';

export default class ContactData extends React.Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: ''
    },
    loading: false
  }

  orderHandler = (event) => {
    this.setState({loading: true});
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: 'John Doe',
        address: {
          street: 'Test street',
          zipCode: '11111',
          country: 'China'
        },
        email: 'snow@test.com'
      },
      deliveryMethod: 'express'
    }
    axios.post('/orders', order)
      .then(response => {
        this.setState({loading: true});
        this.props.history.push('/');
      })
      .catch(error => {
        this.setState({loading: true});
      });
    event.preventDefault();
  }

  render() {
    let form;
    if (this.state.loading) {
      form = <Spinner />;
    } else {
      form = (
        <form>
          <input className={classes.Input} type="text" name="name" placeholder="Your name" />
          <input className={classes.Input} type="email" name="email" placeholder="Your email" />
          <input className={classes.Input} type="text" name="street" placeholder="Street" />
          <input className={classes.Input} type="text" name="postal" placeholder="Postal Code" />
          <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
        </form>
      );
    }

    return (
      <div className={classes.ContactData}>
        <h4>Enter your Contact Data</h4>
        {form}
      </div>
    );
  }
}