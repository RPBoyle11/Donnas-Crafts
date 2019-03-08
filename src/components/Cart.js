import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import myObject, { removeFromCart } from '../actions';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import '../styles/Cart.css';

class Cart extends Component {
  componentDidMount() {
    console.log('Items component loaded');
    this.props.dispatch(myObject.fetchItems());
  }

  handleRemoveClick(e) {
    console.log('Removed from Cart');
    const items = this.props.cart;
    const id = e.currentTarget.value;
    const cartItem = items.filter(item => id === item.id);
    this.props.dispatch(removeFromCart(cartItem))
  }

  render() {
    let cart = this.props.cart
    const itemList = cart.map(item => (
      <div className='item' key={item.id}>
        <img src={item.img} alt=''></img>
        <h1 className='item-name'>{item.title}</h1>
        <h2 className='item-price'>Price: ${item.price}</h2>
        <div className='item-buttons'>
          <button className='remove-from-cart' value={item.id} onClick={(e) => this.handleRemoveClick(e)}>Remove from Cart</button>
        </div>
      </div>
    ))

    const checkoutList = cart.map(item => (
      <p className='checkout-items'>{item.title}
        <span className='item-quantity'>   1x </span>
        <span className='checkout-items-price'> ${item.price}</span>
      </p>
    ))

    function sum(a, b){
      return a + b
    }

    const totalPrices = cart.map(item => {
        let price = 0;
        price = price + item.price;
        return price
    })

    let cartPrice = 0;

    if(totalPrices.length) {
      cartPrice = totalPrices.reduce(sum)
    }

    console.log(cartPrice);

    if (this.props.cart.length === 0) {
      return (
        <div className="App">
          {/* <Nav /> */}
          <div className='shopping-cart-header'>
            <p>Shopping Cart - Please review your items before continuing with purchase.</p>
          </div>
          <div className='shopping-cart-body'>
            <div className='continue-shopping'>
              <Link to='/'>
                <button className='continue-shopping-button'>BACK TO SHOPPING</button>
              </Link>
            </div>
            <div className='cart-details'>
              <span className='number-of-items'>Your Cart - 0 Items</span>
              <span className='total-price'>Subtotal: $0.00</span>
            </div>
            <div className='item'>
              <h2>There are no items in your cart.</h2>
            </div>
          </div>
          <Footer />
        </div>
      )
    } else {
      return (
        <div className="App">
          {/* <Nav /> */}
          <div className='shopping-cart-header'>
            <p>Shopping Cart - Please review your items before continuing with purchase.</p>
          </div>
          <div className='shopping-cart-body'>
            <div className='continue-shopping'>
              <Link to='/'>
                <button className='continue-shopping-button'>BACK TO SHOPPING</button>
              </Link>
            </div>
            <div className='cart-details'>
              <span className='number-of-items'>Your Cart - {this.props.cart.length} Item(s)</span>
              <span className='total-price'>Subtotal: $ {cartPrice}</span>
            </div>
            {itemList}
            <div className='checkout-box'>
              <span className='checkout-items-title'>Items</span>
              <div className='checkout-items-details'>
                {checkoutList}
                <p className='checkout-total'>Total Price: ${cartPrice}</p>
              </div>
              <Link to='/checkout'>
                <button className='checkout-button'>Checkout</button>
              </Link>
            </div>
          </div>
          <Footer />
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    cart: state.itemReducer.cart

  }
}

export default connect(mapStateToProps)(Cart);