import React, { Component } from 'react';
import { connect } from 'react-redux';
import myObject from '../../actions';
import { addToCart } from '../../actions';
import './Items.css'

export class Items extends Component {
  componentDidMount() {
    console.log('Items component loaded');
    this.props.dispatch(myObject.fetchItems());
  }

  handleCartClick(e) {
    const items = this.props.items;
    // console.log(items);
    const id = e.currentTarget.value;
    // console.log('Added to Cart: ', id)
    const cartItem = items.filter(item => id === item.id);
    // console.log(cartItem);
    this.props.dispatch(addToCart(cartItem))

  }

  handleWishlistClick(e) {
    const items = this.props.items;
    // console.log(items);
    const id = e.currentTarget.value;
    // console.log('Added to Wishlist: ', id)

    const wishListItem = items.filter(item => id === item.id);
    // console.log(wishListItem);

    this.setState({
      wishList: [...this.state.wishList, wishListItem]
    })
  }

  render() {
  const items = this.props.items;
  console.log('In Render', items);
  console.log(this.state);


  const itemList = items.map( (item) => (
    <li key={item.id} className='item'>
      <img src={item.img} alt=''></img>
      <h1 className='item-name'>{item.title}</h1>
      <h2 className='item-price'>Price: {item.price}</h2>
      <div className='item-buttons'>
        <button value={item.id} className='add-to-cart-button' onClick={(e)=>this.handleCartClick(e)}>Add to Cart</button>
        <button value={item.id} className='add-to-wishlist-button' onClick={(e)=>this.handleWishlistClick(e)}>Add to Wishlist</button>
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
    cart: 'This is from Items.js'
  }
}

export default connect(mapStateToProps)(Items);