import React, { Component }  from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ShoppingCart from './buttons/ShoppingCart';
import Account from './buttons/Account';
import Menu from './buttons/Menu';
import Search from './buttons/Search';
import mobileLetter from '../images/flowerD.jpg';
import './Nav.css';

class Nav extends Component {
  render() {
    return (
          <nav className="App-header">
            <Menu />
            <Search />
            <h1 className='page-title'><Link className='title-anchor' to='/'>Donna's Crafts 'N Creations</Link></h1>
            <Link className='title-anchor' to='/'><img className='fancy-d' alt='black D with flowers' src={mobileLetter}></img></Link>
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