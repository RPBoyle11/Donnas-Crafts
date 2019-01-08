import React from 'react';
import { Component } from 'react';

class Account extends React.Component {

  render() {
    return (
      <a href='/account-info'>
      <button onClick={()=>this.handleClick()}>Account Information</button>
    </a>
    )
  }
}

export default Account;