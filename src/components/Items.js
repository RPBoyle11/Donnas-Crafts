import React, { Component } from 'react';
import { connect } from 'react-redux';
import fetchItems from '../actions';
import addToCart from '../actions';
import './Items.css'
// const {API_BASE_URL} = require('../config');

export class Items extends Component {
  constructor(props) {
    super(props)

    this.state = {
      cart: ['example item']
    }

    this.handleCartClick = this.handleCartClick.bind(this);
  }

  componentDidMount() {
    console.log('Items component loaded');
    this.props.dispatch(fetchItems());
  }

  handleCartClick(e) {
    console.log('Added to Cart')
    console.log(this.props.items);
    this.props.dispatch(addToCart());
  }

  // handleWishlistClick() {
  //   console.log('Add to wishlist');
  // }

  render() {
  const items = this.props.items;
  console.log('In Render', items);


  const itemList = items.map( (item) => (
    <li key={item.id} className='item'>
      <img src={item.img} alt=''></img>
      <h1 className='item-name'>{item.title}</h1>
      <h2 className='item-price'>Price: {item.price}</h2>
      <div className='item-buttons'>
        <button className='add-to-cart' onClick={(e)=>this.handleCartClick(e)}>Add to Cart</button>
        <button className='add-to-wishlist' onClick={()=>this.handleWishlistClick()}>Add to Wish List</button>
      </div>
    </li>
    ) 
  )
      return (itemList)
  }
}

const mapStateToProps = state => {
  return {
    items: state.itemReducer.items,
    cart: state.itemReducer.cart
  }
}

export default connect(mapStateToProps)(Items);