 import React, {Component} from 'react';
import { connect } from 'react-redux';

class WishList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
    }
  }
  render() {
    return
  }
}

const mapStateToProps = state => {
  return {
    
  }
}

export default connect(mapStateToProps)(WishList);