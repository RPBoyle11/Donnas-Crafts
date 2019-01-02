import React from 'react';
import { Component } from 'react';
import Items from './Items';

class Main extends Component {
  constructor(props) {
    super(props)

    const initialState = {
      cart: [],
      wishList: []
    }

  }



  render() {
    return (
      <div className="App">
        <nav className="App-header">
          <button>Menu</button>
          <input></input>
          <a href=''>
            <button>Search</button>
          </a>
          <h1>Donna's Crafts and Creations</h1>
          <a href=''>
            <button>Account Information</button>
          </a>
          <a href=''>
          <button>Shopping Cart</button>
          </a>
        </nav>
        <Items />
      </div>
    );
  }
}

export default Main;