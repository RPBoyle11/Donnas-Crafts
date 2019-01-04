import React from 'react';
import { Component } from 'react';
import './Search.css';

class Search extends React.Component {
  
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

export default Search;


