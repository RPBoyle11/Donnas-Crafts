import React, { Component } from 'react';
import {connect} from 'react-redux';
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

const mapStateToProps = state => {
  return {
    
  }
}

export default connect(mapStateToProps)(ShoppingCart);