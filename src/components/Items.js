import React, { Component } from 'react';
import { connect } from 'react-redux';
import fetchItems from '../actions';
import './Items.css'
// const {API_BASE_URL} = require('../config');

export class Items extends Component {
  componentDidMount() {
    console.log('Items component loaded');
    this.props.dispatch(fetchItems());
  }

  // loadItems() {
  //   this.setState({
  //    error: null,
  //    loading: true
  //   });
  //    fetch(`${API_BASE_URL}/items`)
  //     .then(res => {
  //       if (!res.ok) {
  //         return Promise.reject(res.statusText);
  //       }
  //       return res.json();
  //     })
  //     .then(itemList => {
  //       console.log('From Database', itemList)
  //       this.setState({
  //         itemList: itemList,
  //         loading: false
  //       })
  //       console.log(this.state);
  //     })
  //     .catch(err => {
  //       this.setState({
  //         error: 'Could not load items',
  //         loading: false
  //       })
  //     });
  //  } 

  // handleCartClick() {
  //   console.log('Added to Cart')
  //   console.log('From Click on Cart', this.state.itemList[0][0]);
  //   // this.setState = {inCart: true};
  //   // if (this.state.inCart === true) {
  //   //   return (
  //   //     console.log(this.state.inCart)
  //   //   )
  //   //   }
  // }

  // handleWishlistClick() {
  //   console.log('Add to wishlist');
  // }

  render() {
  const items = this.props.items;
  console.log('In Render', items);


  const itemList = items.map( (item, index) => (
    <li key={index} className='item'>
      <img src={item.img} alt=''></img>
      <h1 className='item-name'>{item.title}</h1>
      <h2 className='item-price'>Price: {item.price}</h2>
      <div className='item-buttons'>
        <button className='add-to-cart' onClick={()=>this.handleCartClick()}>Add to Cart</button>
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
    items: state.itemReducer.items
  }
}

export default connect(mapStateToProps)(Items);