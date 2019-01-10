import React, { Component }  from 'react';
import { connect } from 'react-redux';
import ShoppingCart from './buttons/ShoppingCart';
import Account from './buttons/Account';
import Menu from './buttons/Menu';
import Search from './buttons/Search';
import './Nav.css';

class Nav extends Component {
  render() {
    return (
          <nav className="App-header">
            <Menu />
            <Search />
            <h1 className='page-title'><a className='title-anchor' href='/'>Donna's Crafts 'N Creations</a></h1>
            <Account />
            <ShoppingCart />
          </nav>
    );
  }
}

const mapStateToProps = state => {
  return {
    
  }
}

export default connect(mapStateToProps)(Nav);