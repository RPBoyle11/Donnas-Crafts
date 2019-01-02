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

  // addToCart(e) {

  // }


  render() {
    return (
      <div className="App">
        <nav className="App-header">
          <select>
            <option value='menu'>Menu</option>
            <option value='holidays' disabled>Shop by Holiday</option>
            <option value='Christmas'>Christmas</option>
            <option value='4th of July'>4th of July</option>
            <option value='Halloween'>Halloween</option>
            <option value='Easter'>Easter</option>
            <option value='seasons' disabled>Shop by Season</option>
            <option value='summer'>Summer</option>
            <option value='fall'>Fall</option>
            <option value='winter'>Winter</option>
            <option value='spring'>Spring</option>
          </select>
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