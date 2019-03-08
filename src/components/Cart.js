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
      <li className='cart-item' key={item.id}>
        <img src={item.img} alt='' className='cart-item-img'></img>
        <p className='cart-item-title'>{item.title}</p>
        <p className='cart-item-price'>Price: ${item.price}</p>
        <div className='cart-item-buttons'>
          <button className='remove-from-cart' value={item.id} onClick={(e) => this.handleRemoveClick(e)}>Remove from Cart</button>
        </div>
      </li>
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
        <div className="cart-page">
          <header>Donna's Crafts 'N Creations</header>
          <div className='continue-shopping'>
            <Link 
                to='/'
                className='continue-shopping-link'>BACK TO SHOPPING
            </Link>
          </div>
          <div className='shopping-cart-header'>
            <p className='cart-page-name'>Shopping Cart</p>
            <p className='review-purchase'>Please review your items before continuing with purchase.</p>
          </div>
          <div className='shopping-cart-body'>
            <div className='cart-details'>
              <p className='number-of-items'>Your Cart - 0 Items</p>
              <p className='total-price'>Subtotal: $0.00</p>
            </div>
              <p className='no-items-p'>There are no items in your cart.</p>
          </div>
          <Footer />
        </div>
      )
    } else {
      return (
        <div className="cart-page">
          <header>Donna's Crafts 'N Creations</header>
          <div className='continue-shopping'>
            <Link 
              to='/'
              className='continue-shopping-link'>BACK TO SHOPPING
            </Link>
          </div>
          <div className='shopping-cart-header'>
            <p className='cart-page-name'>Shopping Cart</p>
            <p className='review-purchase'>Please review your items before continuing with purchase.</p>
          </div>
          <div className='cart-details'>
            <p className='number-of-items'>Your Cart - {this.props.cart.length} Item(s)</p>
            <p className='total-price'>Subtotal: $ {cartPrice}</p>
          </div>
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
            <ul className='cart-list'>
              {itemList}
            </ul>
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