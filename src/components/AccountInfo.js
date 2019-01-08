import React from 'react';
import { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Items from './Items';
import Nav from './Nav';
import './AccountInfo.css';
import Footer from './Footer';

class AccountInfo extends Component {

  handleRemoveClick() {
    console.log('Removed from Cart');
  }

  render() {
    return (
        <div className="App">
          <Nav />
          <div className='shopping-cart-header'>
            <p>Account Info</p>
            <p>We value our returning customers and appreciate you creating an account with us.</p>
          </div>
          <div className="wishList">
            <h1>Wishlist</h1>
          </div>
          <div className='item'>
             <img src="https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/48420174_966823120372003_6861683268698243072_n.jpg?_nc_cat=105&_nc_ht=scontent-iad3-1.xx&oh=beeae140dc07685009d3df0c0dc6d69a&oe=5C95B68F" alt=''></img>
             <h1 className='item-name'>Bless This Home - Wreath</h1>
             <h2 className='item-price'>Price: $50.00</h2>
            <div className='item-buttons'>
              <button className='remove-from-cart' onClick={()=>this.handleRemoveClick()}>Remove from Cart</button>
            </div>
          </div>
          <Footer />
        </div>
    );
  }
}

export default AccountInfo;