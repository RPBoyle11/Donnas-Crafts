import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import './ShoppingCart.css';

class ShoppingCart extends Component {

  render() {
    return (
      <div className='shopping-cart-link-container'>
        <Link className='cart-link' to='/shopping-cart'>
          Shopping Cart ({this.props.cart.length})
        </Link>
      </div>  
    )
  }
}

const mapStateToProps = state => {
  return {
    cart: state.itemReducer.cart
  }
}

export default connect(mapStateToProps)(ShoppingCart);