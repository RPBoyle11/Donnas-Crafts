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
    orderDetails: this.props.cart
  }

  handleSubmit(e) {
    //when form is submit it will send an email with all of the information to donnascraftsncreations@gmail.com
    e.preventDefault();
    console.log('HANDLE SUBMIT WORKED!!!!!')
    console.log(this.state);
    
    let emailInfo = this.state
    console.log(emailInfo);

    sendConfirmationEmail(emailInfo);
    
  }
  
  render() {
    let cart = this.props.cart;

    let checkoutList = cart.map(item => (
    <p className='checkout-items'>{item.title}
        <span className='item-quantity'>   1x </span>
        <span className='checkout-items-price'> ${item.price}</span>
      </p>
      )
    )

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
        <section className='input-fields'>
          <label for='FirstName'>First Name</label>
          <input id='FirstName' type='text' placeholder='First Name' onChange={e => {e.preventDefault(); this.setState({firstName: e.target.value})}}></input><br/>
          <label for='LastName'>Last Name</label>
          <input type='text' id='LastName' placeholder='Last Name' onChange={e => {e.preventDefault(); this.setState({lastName: e.target.value})}}></input><br/>
          <label for='email'>Email</label>
          <input type='email' id='email' placeholder='Email' onChange={e => {e.preventDefault(); this.setState({email: e.target.value})}}></input><br/>
          <label for='phone'>Phone Number</label>
          <input type='tel' id='phone' placeholder='555-555-5555' onChange={e => {e.preventDefault(); this.setState({phone: e.target.value})}}></input><br/>
          <label>Order Details</label>
          <div className='order-details-container'>
            <span className='checkout-items-title'>Items</span>
            <div className='checkout-items-details'>
            {checkoutList}
            <p className='checkout-total'>Total Price: ${cartPrice}</p>
            </div>
          </div>
        </section>
        <button className='order-submit-button' type='submit'>Submit Order</button>
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