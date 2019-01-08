import React from 'react';
import { Component } from 'react';
import ShoppingCart from './buttons/ShoppingCart';
import Account from './buttons/Account';
import Menu from './buttons/Menu';
import Search from './buttons/Search';
import './Nav.css';

class Nav extends Component {
  constructor(props) {
    super(props)

  this.state = {

  }
  }

  render() {
    return (
          <nav className="App-header">
            <Menu />
            <Search />
            <h1 className='donnas-title'><a className='title-anchor' href='/'>Donna's Crafts and Creations</a></h1>
            <Account />
            <ShoppingCart />
          </nav>
    );
  }
}

export default Nav;