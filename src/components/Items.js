import React from 'react';
import { Component } from 'react';
import './Items.css'
const {API_BASE_URL} = require('../config');

class Items extends React.Component {
//   export const fetchUserProfile = (userid) => dispatch => {
//     fetch(`${API_BASE_URL}/users/${userId}`).then(res => {
//         if (!res.ok) {
//             return Promise.reject(res.statusText);
//         }
//         return res.json();
//     }).then(userProfile => {
//         dispatch(fetchUserProfileSuccess(userProfile));
//     }).catch(err => dispatch(fetchUserProfileError(err)));
// };

  constructor(props) {
    super(props)
    const state = {
      theme: null,
      onSale: false,
      inCart: false,
      onWishList: false,
      productType: '',
      itemList: []
    }
  }

  componentDidMount() {
    console.log('Items mounted');
    console.log(this.state);
    this.loadItems();
  }

  loadItems() {
    this.setState({
     error: null,
     loading: true
    });
     fetch(`${API_BASE_URL}/items`)
      .then(res => {
        if (!res.ok) {
          return Promise.reject(res.statusText);
        }
        return res.json();
      })
      .then(itemList => {
        console.log(itemList)
        this.setState({
          itemList: itemList,
          loading: false
        })
        console.log(this.state);
      })
      .catch(err => {
        this.setState({
          error: 'Could not load items',
          loading: false
        })
      });
   } 

  handleCartClick() {
    console.log('Added to Cart')
    // this.setState = {inCart: true};
    // if (this.state.inCart === true) {
    //   return (
    //     console.log(this.state.inCart)
    //   )
    //   }
  }

  handleWishlistClick() {
    console.log('Add to wishlist');
  }

  render() {
    return (
      <div className='item'>
        <img src="https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/48420174_966823120372003_6861683268698243072_n.jpg?_nc_cat=105&_nc_ht=scontent-iad3-1.xx&oh=beeae140dc07685009d3df0c0dc6d69a&oe=5C95B68F" alt=''></img>
        <h1 className='item-name'>Bless This Home - Wreath</h1>
        <h2 className='item-price'>Price: $50.00</h2>
        <div className='item-buttons'>
          <button className='add-to-cart' onClick={()=>this.handleCartClick()}>Add to Cart</button>
          <button className='add-to-wishlist' onClick={()=>this.handleWishlistClick()}>Add to Wish List</button>
        </div>
      </div>
    )
  }
}

export default Items;