import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import CheckoutForm from './CheckoutForm';
import '../styles/Checkout.css';

class Checkout extends Component {
  render() {
    return(
      <div className='checkout-page'>
      <header role='banner'>Donna's Crafts 'N Creations</header>
        <Link 
          to='/'
          className='continue-shopping-link'>BACK TO SHOPPING
        </Link>
        <Link 
          to='/shopping-cart'
          className='back-to-cart'>BACK TO CART
        </Link>
        <CheckoutForm />
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