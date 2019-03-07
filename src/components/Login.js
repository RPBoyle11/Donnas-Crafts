import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from './Nav';
import Footer from './Footer';

class Login extends React.Component {
  render() {
    return(
      <div>
        <Nav />
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    
  }
}

export default connect(mapStateToProps)(Login);