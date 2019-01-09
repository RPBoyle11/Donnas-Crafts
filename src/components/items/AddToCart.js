import React, { Component } from 'react';
import {connect} from 'react-redux';
import './AddToCart.css';

export class AddToCart extends Component {
  render() {
    return (
        <button className='add-to-cart-button' onClick={()=>this.handleWishlistClick()}>Add to Cart</button>
    )
  }

}

const mapStateToProps = state => {
  return {

  }
}

export default connect(mapStateToProps)(AddToCart);