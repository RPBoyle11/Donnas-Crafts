import React, { Component } from 'react';
import {connect} from 'react-redux';
import './AddToWishlist.css';

export class AddToWishlist extends Component {
  render() {
    return (
      <div className='wishlist-button'>
        <button className='add-to-wishlist' onClick={()=>this.handleWishlistClick()}>Add to Wishlist</button>
      </div>
    )
  }

}

const mapStateToProps = state => {
  return {

  }
}

export default connect(mapStateToProps)(AddToWishlist);