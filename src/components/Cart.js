import React from 'react';
import { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';
// import Items from './Items';
import './Cart.css';

class Cart extends Component {
  constructor(props) {
    super(props)

  this.state = {
      cart: []
    }
  }

  handleRemoveClick() {
    console.log('Removed from Cart');
  }

  render() {
    return (
        <div className="App">
          <Nav />
             <div className='shopping-cart-header'>
              <p>Shopping Cart - Please review your items before continuing with purchase.</p>
             </div>
          <div className='shopping-cart-body'>
            <div className='continue-shopping'>
                <a href='/'>
                <button className='continue-shopping-button'>BACK TO SHOPPING</button>
                </a>
            </div>
            <div className='cart-details'>
              <span className='number-of-items'>Your Cart - 1 Item</span>
              <span className='total-price'>Subtotal: $50.00</span>
            </div>
            <div className='item'>
              <img src="https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/48420174_966823120372003_6861683268698243072_n.jpg?_nc_cat=105&_nc_ht=scontent-iad3-1.xx&oh=beeae140dc07685009d3df0c0dc6d69a&oe=5C95B68F" alt=''></img>
              <h1 className='item-name'>Bless This Home - Wreath</h1>
              <h2 className='item-price'>Price: $50.00</h2>
              <div className='item-buttons'>
                <button className='remove-from-cart' onClick={()=>this.handleRemoveClick()}>Remove from Cart</button>
              </div>
            </div>
          </div>
          <Footer />
        </div>
    );
  }
}

export default Cart;