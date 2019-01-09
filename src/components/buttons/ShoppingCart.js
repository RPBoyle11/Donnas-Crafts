import React, { Component } from 'react';
import './ShoppingCart.css';

class ShoppingCart extends Component {

  render() {
    return (
      <a href='/shopping-cart'>
        <button className='shoppingCart-button'>Shopping Cart</button>
      </a>
    )
  }
}

export default ShoppingCart;