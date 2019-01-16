import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import './ShoppingCart.css';

class ShoppingCart extends Component {

  render() {
    return (
      <Link to='/shopping-cart'>
        <button className='shoppingCart-button'>Shopping Cart</button>
      </Link>
    )
  }
}

const mapStateToProps = state => {
  return {
    
  }
}

export default connect(mapStateToProps)(ShoppingCart);