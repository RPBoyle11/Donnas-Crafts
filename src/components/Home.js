import React, { Component } from 'react';
import { connect } from 'react-redux';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Items from './Items';
import Nav from './Nav';
import Footer from './Footer';
import './Home.css';

class Home extends Component {

  render() {
    return (
        <div className="App">
          <Nav />
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
    items: state.itemReducer.items
  }
}

export default connect(mapStateToProps)(Home);