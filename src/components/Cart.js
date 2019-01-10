import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';
import './Cart.css';

class Cart extends Component {
  constructor(props) {
    super(props)

  this.state = {
      cart: this.props.cart
    }
  }

  handleRemoveClick() {
    console.log('Removed from Cart');
  }

  render() {

    console.log(this.state.cart);

    // if(this.state.cart.length === 0) {
    //   return (
    //     <div className="App">
    //     <Nav />
    //        <div className='shopping-cart-header'>
    //         <p>Shopping Cart - Please review your items before continuing with purchase.</p>
    //        </div>
    //     <div className='shopping-cart-body'>
    //       <div className='continue-shopping'>
    //           <a href='/'>
    //           <button className='continue-shopping-button'>BACK TO SHOPPING</button>
    //           </a>
    //       </div>
    //       <div className='cart-details'>
    //         <span className='number-of-items'>Your Cart - 0 Items</span>
    //         <span className='total-price'>Subtotal: $0.00</span>
    //       </div>
    //       <div className='item'>
    //         <h2>There are no items in your cart.</h2>
    //       </div>
    //     </div>
    //     <Footer />
    //   </div>
    //   )
    // } else {
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
                <div className='checkout-box'>
                  <span className='checkout-items-title'>Items</span>
                  <div className='checkout-items-details'>
                    <p className='checkout-items'>Bless This Home - Wreath 
                    <span className='item-quantity'>   1x </span>
                    <span className='checkout-items-price'> $50.00</span>
                    </p>
                    <p className='checkout-total'>Total Price: $50.00</p>
                  </div>
                  <a href='/checkout'>
                    <button className='checkout-button'>Checkout</button>
                  </a>
                </div>
            </div>
            <Footer />
          </div>
      );
    // }
  }
}

const mapStateToProps = state => {
  return {
    cart: state.itemReducer.cart
    
  }
}

export default connect(mapStateToProps)(Cart);