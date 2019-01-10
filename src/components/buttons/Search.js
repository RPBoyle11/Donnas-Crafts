import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Search.css';

class Search extends Component {
  
  handleClick() {
    
  }

  render() {
    return (
      <div className='search-bar'>
        <input placeholder='Wreath'></input>
          <a href='/:search'>
            <button onClick={()=>this.handleClick()}>Search</button>
          </a>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    
  }
}

export default connect(mapStateToProps)(Search);


