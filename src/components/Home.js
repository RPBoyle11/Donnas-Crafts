import React from 'react';
import { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Items from './Items';
import Nav from './Nav';
import Footer from './Footer';
import './Home.css';

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      itemsList: [],
      cart: [],
      wishList: []
    }
  }

  render() {
    return (
        <div className="App">
          <Nav />
          <Items />
          <Footer />
        </div>
    );
  }
}

export default Home;