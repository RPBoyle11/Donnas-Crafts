import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Account extends Component {

  render() {
    return (
      <Link to='/account-info'>
      <button>Account Information</button>
    </Link>
    )
  }
}

const mapStateToProps = state => {
  return {

  }
}

export default connect(mapStateToProps)(Account);