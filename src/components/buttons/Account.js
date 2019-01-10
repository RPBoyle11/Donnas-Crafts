import React, { Component } from 'react';
import { connect } from 'react-redux';

class Account extends Component {

  render() {
    return (
      <a href='/account-info'>
      <button>Account Information</button>
    </a>
    )
  }
}

const mapStateToProps = state => {
  return {

  }
}

export default connect(mapStateToProps)(Account);