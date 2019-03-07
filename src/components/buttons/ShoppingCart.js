import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import './ShoppingCart.css';

class ShoppingCart extends Component {

  render() {
    return (
      <div className='shopping-cart-link-container'>
        <Link to='/shopping-cart'>
          <button className='shoppingCart-button'>Shopping Cart</button>
        </Link>
      </div>  
    )
  }
}

const mapStateToProps = state => {
  return {
    
  }
}

export default connect(mapStateToProps)(ShoppingCart);