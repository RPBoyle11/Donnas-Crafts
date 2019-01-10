import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Footer.css';

class Footer extends Component {
  render() {
    return(
      <footer>
        <p>If you have any questions about available or previously sold products, please feel free to contact me by email and I will get back to you within 24 hours.  My email address can be found here: </p><span className='email-addresses'><a href='mailto:rpboyle11@yahoo.com'>rpboyle11@yahoo.com</a></span>
      </footer>
    )
  }
}

const mapStateToProps = state => {
  return {
    
  }
}

export default connect(mapStateToProps)(Footer);

