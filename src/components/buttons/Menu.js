import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Menu.css';

class Menu extends Component {

//handle filtering of items in home screen so that you only view items that match the season or holiday that you selected   
//will be done onSelect={(e)=>this.handleSelection(e)}
  handleSelection(e) {

  }
  
  render() {
    return (
    <select className='menu-dropdown'>
      <option value='menu'>Menu</option>
      <option value='holidays' disabled>Shop by Holiday</option>
      <option value='Christmas'>Christmas</option>
      <option value='4th of July'>4th of July</option>
      <option value='Halloween'>Halloween</option>
      <option value='Easter'>Easter</option>
      <option value='seasons' disabled>Shop by Season</option>
      <option value='summer'>Summer</option>
      <option value='fall'>Fall</option>
      <option value='winter'>Winter</option>
      <option value='spring'>Spring</option>
    </select>
    )
  }
}

const mapStateToProps = state => {
  return {
    
  }
}

export default connect(mapStateToProps)(Menu);