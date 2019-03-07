import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './Account.css';

class Account extends Component {

  render() {
    return (
    <div className='accountInfo-container'>
      <Link to='/account-info'>
        <button>Account Information</button>
      </Link>
    </div>
    )
  }
}

const mapStateToProps = state => {
  return {

  }
}

export default connect(mapStateToProps)(Account);