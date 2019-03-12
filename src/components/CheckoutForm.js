import React, { Component } from 'react';
import { connect } from 'react-redux';
import sendConfirmationEmail from '../actions/email';
import '../styles/CheckoutForm.css';

class CheckoutForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    orderDetails: 'These are the order details'
  }

  handleSubmit(e) {
    //when form is submit it will send an email with all of the information to rpboyle11@yahoo.com
    e.preventDefault();
    console.log('HANDLE SUBMIT WORKED!!!!!')
    console.log(this.state);

    // if (this.checkoutList) {
    //   console.log(this.checkoutList);
    //   this.setState({orderDetails: this.checkoutList});
    // }
    
    let emailInfo = this.state
    console.log(emailInfo);

    // this.setState({
    //   firstName: '',
    //   lastName: '',
    //   email: '',
    //   phone: '',
    //   orderDetails: ''
    // })

    sendConfirmationEmail(emailInfo);
    
  }
  
  render() {
    let cart = this.props.cart;

    const checkoutList = cart.map(item => (
      <p className='checkout-items'>{item.title}
        <span className='item-quantity'>   1x </span>
        <span className='checkout-items-price'> ${item.price}</span>
      </p>
    ))

    function sum(a, b){
      return a + b
    }

    const totalPrices = cart.map(item => {
        let price = 0;
        price = price + item.price;
        return price
    })

    let cartPrice = 0;

    if(totalPrices.length) {
      cartPrice = totalPrices.reduce(sum)
    }

    console.log(cartPrice);

    return(
      <form onSubmit={e => this.handleSubmit(e)} className='checkout-form'>
        <div className='input-fields'>
          <label>First Name</label>
          <input type='text' placeholder='First Name' onChange={e => {e.preventDefault(); this.setState({firstName: e.target.value})}}></input><br/>
          <label>Last Name</label>
          <input type='text' placeholder='Last Name' onChange={e => {e.preventDefault(); this.setState({lastName: e.target.value})}}></input><br/>
          <label>Email</label>
          <input type='email' placeholder='Email' onChange={e => {e.preventDefault(); this.setState({email: e.target.value})}}></input><br/>
          <label>Phone Number</label>
          <input type='tel' placeholder='555-555-5555' onChange={e => {e.preventDefault(); this.setState({phone: e.target.value})}}></input><br/>
          <label>Order Details</label>
          <div className='order-details-container'>
            <span className='checkout-items-title'>Items</span>
            <div className='checkout-items-details'>
            {checkoutList}
            <p className='checkout-total'>Total Price: ${cartPrice}</p>
            </div>
          </div>
          <div className='order-submit-button'>
            <button type='submit'>Submit Order</button>
          </div>
        </div>
      </form>
    )
  }
}

const mapStateToProps = state => {
  return {
    items: state.itemReducer.items,
    cart: state.itemReducer.cart,
    filter: state.itemReducer.filter,
    totalPrice: state.itemReducer.totalPrice
  }
}

export default connect(mapStateToProps)(CheckoutForm);