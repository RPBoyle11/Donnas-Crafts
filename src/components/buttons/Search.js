import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './Search.css';

class Search extends Component {
  
  handleClick(e) {
    
  }

  render() {
    return (
      <div className='search-bar'>
        <input placeholder='Wreath'></input>
          <Link to='/:search'>
            <button onClick={(e)=>this.handleClick(e)}>Search</button>
          </Link>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    
  }
}

export default connect(mapStateToProps)(Search);


