import React from 'react';
import { Component } from 'react';
import './Items.css'
const {API_BASE_URL} = require('../config');

class Items extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
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
    console.log('From Mount', this.state);
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
        console.log('From Database', itemList)
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
    console.log('From Click on Cart', this.state.itemList[0][0]);
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
  const items = this.state.itemList[0];
  console.log('From Render = items', items);
  // const listItems = items.map(item => {
  //     return (<li key={item.id}>
  //        <img src={item.img} alt=''></img>
  //        <h1 className='item-name'>{item.title}</h1>
  //        <h2 className='item-price'>Price: {item.price}</h2>
  //        <div className='item-buttons'>
  //           <button className='add-to-cart' onClick={()=>this.handleCartClick()}>Add to Cart</button>
  //          <button className='add-to-wishlist' onClick={()=>this.handleWishlistClick()}>Add to Wish List</button>
  //        </div>
  //   </li> )})
      console.log('Should match items above', this.state.itemList[0])
    return (
      <ul className='item'>
        {/* {listItems} */}
        <li>
          <img src="https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/48420174_966823120372003_6861683268698243072_n.jpg?_nc_cat=105&_nc_ht=scontent-iad3-1.xx&oh=beeae140dc07685009d3df0c0dc6d69a&oe=5C95B68F" alt=''></img>
          <h1 className='item-name'>Bless This Home - Wreath</h1>
          <h2 className='item-price'>Price: $50.00</h2>
          <div className='item-buttons'>
            <button className='add-to-cart' onClick={()=>this.handleCartClick()}>Add to Cart</button>
            <button className='add-to-wishlist' onClick={()=>this.handleWishlistClick()}>Add to Wish List</button>
          </div>
        </li>
      </ul>
    )
  }
}

const mapStateToProps = state => {
  return {
    itemList: this.state.itemList,
    img: this.state.img,
    title: this.state.title,
    price: this.state.price,
  }
}

export default Items;