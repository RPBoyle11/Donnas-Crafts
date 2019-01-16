import React, { Component }  from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
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
            <h1 className='page-title'><Link className='title-anchor' to='/'>Donna's Crafts 'N Creations</Link></h1>
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