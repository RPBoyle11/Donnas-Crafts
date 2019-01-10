import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from './Nav';
import Footer from './Footer';

class Checkout extends Component {
  render() {
    return(
      <div>
        <Nav />
        <h1 className='checkout-header'>Checkout:  Please review your purchase one last time.</h1>
        <div className='checkout-body'>
              <div className='checkout-details'>
                <span className='number-of-items'>Your Cart - 1 Item</span>
                <span className='total-price'>Subtotal: $50.00</span>
              </div>
              <a href='/'>
                <button className='checkout-button'>Continue with Purchase</button>
              </a>
            </div>
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    
  }
}

export default connect(mapStateToProps)(Checkout);