import React from 'react';
import { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Items from './Items';
import ShoppingCart from './buttons/ShoppingCart';
import Account from './buttons/Account';
import Menu from './buttons/Menu';
import Search from './buttons/Search';
import './Home.css';

class Home extends Component {
  constructor(props) {
    super(props)

    const initialState = {
      cart: [],
      wishList: []
    }

  }

  // addToCart(e) {

  // }


  render() {
    return (
        <div className="App">
          <nav className="App-header">
            <Menu />
            <Search />
            <h1 className='donnas-title'><a className='title-anchor' href='/'>Donna's Crafts and Creations</a></h1>
            <Account />
            <ShoppingCart />
          </nav>
          <Items />
        </div>
    );
  }
}

export default Home;