import React from 'react';
import { Component } from 'react';

class ShoppingCart extends React.Component {
  handleClick() {

  }


  render() {
    return (
      <a href='/shopping-cart'>
        <button onClick={()=>this.handleClick()} className='shoppingCart-button'>Shopping Cart</button>
      </a>
    )
  }
}

export default ShoppingCart;