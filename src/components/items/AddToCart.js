import React, { Component } from 'react';
import {connect} from 'react-redux';
import './AddToCart.css';

export class AddToCart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cart: ['example cart'],
      items: this.props.items
    }

    this.handleCartClick = this.handleCartClick.bind(this);

  }

  handleCartClick() {
    console.log('Added to Cart')
    console.log(this.props.items);
    console.log(this.state.items);
    // this.props.dispatch(addToCart());
  }

  render() {
    return (
        <button className='add-to-cart-button' onClick={()=>this.handleCartClick()}>Add to Cart</button>
    )
  }

}

const mapStateToProps = state => {
  return {
    items: state.itemReducer.items,
    cart: state.itemReducer.cart
  }
}

export default connect(mapStateToProps)(AddToCart);