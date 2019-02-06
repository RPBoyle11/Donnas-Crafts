import React, { Component } from 'react';
import { connect } from 'react-redux';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Items from './items/Items.js';
import Nav from './Nav';
import Footer from './Footer';
import './Home.css';

class Home extends Component {

  render() {
 
    return (
        <div className="App">
          <Nav />
          <h2 className='intro-header'>Thank you so much for visiting Donna's Crafts 'N Creations.  For those of you that are browsing for the first time, I'll give you a little background on myself.  My name is Donna Boyle, and I am owner and sole creator of all of the items you will find on this site.  Everything that you see is handmade and unique in it's own way. I've always enjoyed making gift baskets and decorations, but I just started doing this seriously a few years ago.  Most items in the store are one of a kind, so if you see something you like, make sure you buy it right away!  If there is something that you LOVE, but it has already sold, please feel free to reach out to me.  I will let you know if its possible to make it again.</h2>
          <ul className='item-list'>
            <Items /> 
          </ul>
          <Footer />
        </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.itemReducer.items,
    cart: state.itemReducer.cart,
    filter: state.itemReducer.filter
  }
}

export default connect(mapStateToProps)(Home);