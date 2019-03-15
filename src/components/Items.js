import React, { Component } from 'react';
import { connect } from 'react-redux';
import myObject from '../actions';
import { addToCart } from '../actions';
import '../styles/Items.css'

export class Items extends Component {
  componentDidMount() {
    console.log('Items component loaded');
    this.props.dispatch(myObject.fetchItems());
  }

  handleCartClick(e) {
    const items = this.props.items;
    const id = e.currentTarget.value;
    const cartItem = items.filter(item => id === item.id);
    this.props.dispatch(addToCart(cartItem))

  }

  handleWishlistClick(e) {
    const items = this.props.items;
    const id = e.currentTarget.value;
    const wishListItem = items.filter(item => id === item.id);
    this.setState({
      wishList: [...this.state.wishList, wishListItem]
    })
  }

  render() {
  const items = this.props.items;
  const filtered = this.props.filter;
  const filterList = filtered.map( (item) => (
    <li key={item.id} className='item'>
      <img src={item.img} alt={item.title} className='item-img'></img>
      <h1 className='item-title'>{item.title}</h1>
      <h2 className='item-price'>Price: ${item.price}</h2>
      <div className='item-buttons'>
        <button value={item.id} className='add-to-cart-button' onClick={(e)=>this.handleCartClick(e)}>Add to Cart</button>
        {/* <button value={item.id} className='add-to-wishlist-button' onClick={(e)=>this.handleWishlistClick(e)}>Add to Wishlist</button> */}
      </div>
    </li>
    ) 
  )

  const itemList = items.map( (item) => (
    <li key={item.id} className='item'>
      <img src={item.img} alt={item.title} className='item-img'></img>
      <p className='item-title'>{item.title}</p>
      <p className='item-price'>Price: ${item.price}</p>
      <div className='item-buttons'>
        <button value={item.id} className='add-to-cart-button' onClick={(e)=>this.handleCartClick(e)}>Add to Cart</button>
        {/* <button value={item.id} className='add-to-wishlist-button' onClick={(e)=>this.handleWishlistClick(e)}>Add to Wishlist</button> */}
      </div>
    </li>
    ) 
  )

  if (filtered.length) {
    return (filterList)
  } else {
    return (itemList)
  }
  }
}

const mapStateToProps = state => {
  return {
    items: state.itemReducer.items,
    cart: state.itemReducer.cart,
    filter: state.itemReducer.filter
  }
}

export default connect(mapStateToProps)(Items);