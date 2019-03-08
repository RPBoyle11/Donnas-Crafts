import React from 'react';
import ShoppingCart from './buttons/ShoppingCart';
// import Account from './buttons/Account';
import Menu from './buttons/Menu';
// import Search from './buttons/Search';
import '../styles/Nav.css';

export default function Nav() {
    return (
          <nav className="App-header">
            <Menu />
            {/* <Search /> */}
            {/* <Account /> */}
            <ShoppingCart />
          </nav>
    );
}