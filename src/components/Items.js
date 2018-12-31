import React from 'react';
import { Component } from 'react';
import './items.css'

class Items extends React.Component {
  constructor(props) {
    super(props)
    const initialState = {
      collection: null,
      onSale: false,
      inCart: false,
      onWishList: false
    }
  }

  render() {
    return (
      <div className='item'>
        <img src="https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/48420174_966823120372003_6861683268698243072_n.jpg?_nc_cat=105&_nc_ht=scontent-iad3-1.xx&oh=beeae140dc07685009d3df0c0dc6d69a&oe=5C95B68F" alt=''></img>
        <h1 className='item-name'>Bless This Home - Wreath</h1>
        <h2 className='item-price'>Price: $50.00</h2>
        <div className='item-buttons'>
          <button className='add-to-cart'>Add to Cart</button>
          <button className='add-to-wishlist'>Add to Wish List</button>
        </div>
      </div>
    )
  }
}

export default Items;