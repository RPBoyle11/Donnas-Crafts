import React from 'react';
import { Link } from 'react-router-dom';
import ShoppingCart from './buttons/ShoppingCart';
// import Account from './buttons/Account';
import Menu from './buttons/Menu';
// import Search from './buttons/Search';
import mobileLetter from '../images/Fancy_Black_D.jpg';
import '../styles/Nav.css';

export default function Nav() {
    return (
          <nav className="App-header">
            <Menu />
            {/* <Search /> */}
            <h1 className='page-title'><Link className='title-anchor' to='/'>Donna's Crafts 'N Creations</Link></h1>
            <Link className='title-anchor' to='/'><img className='fancy-d' alt='black D with flowers' src={mobileLetter}></img></Link>
            {/* <Account /> */}
            <ShoppingCart />
          </nav>
    );
}