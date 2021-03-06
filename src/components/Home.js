import React, { Component } from 'react';
import { connect } from 'react-redux';
import Items from './Items.js';
import Nav from './Nav';
import Footer from './Footer';
import '../styles/Home.css';

class Home extends Component {

  render() {
 
    return (
        <div className="Home">
          <Nav />
          <section className='intro-div'>
            <h1 className='title'>Donna's Crafts 'N Creations</h1>
          </section>
          <h1 className='welcome'>Welcome to Donna's Crafts 'N Creations!</h1>
          <section className='about-me'>
            <p className='intro-header'>Thank you so much for visiting Donna's Crafts 'N Creations.  For those of you that are browsing for the first time, I'll give you a little background on myself.</p>
            <p>My name is Donna Boyle, and I am owner and sole creator of all of the items you will find on this site.  Everything that you see is handmade and unique in it's own way. I've always enjoyed making gift baskets and decorations, but I just started doing this seriously a few years ago. </p> 
            <p>Most items in the store are one of a kind, so if you see something you like, make sure you buy it right away!  If there is something that you LOVE, but it has already sold, please feel free to reach out to me.  I will let you know if its possible to make it again. Enjoy!</p>
          </section>
          <ul className='item-list' id='homeItems' aria-live='polite'>
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