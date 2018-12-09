import React from 'react';

import Button from '../../UI/Button/Button';

export default class OrderSummary extends React.Component {

  render() {
    const ingredientsSummary = Object.entries(this.props.ingredients)
        .map(ele =>(<li key={ele[0]}>
                      <span style={{textTransform: 'capitalize'}}>{ele[0]}</span>: {ele[1]}
                    </li>));
    return (
      <>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredients:</p>
        <ul>
          {ingredientsSummary}
        </ul>
        <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
        <p>Continue to Checkout?</p>
        <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
        <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
      </>
    );
    }
};