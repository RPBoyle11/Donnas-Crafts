import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Menu.css';

class Menu extends Component {
  handleSelection(e) {
    let items = this.props.items;

    const value = e.currentTarget.value;
    const filteredItems = items.filter(item => (value === item.theme || value === item.season))
    console.log(value);
    console.log(filteredItems);
  }
  
  render() {
    return (
    <select className='menu-dropdown' onChange={(e)=>this.handleSelection(e)}>
      <option value='menu'>Menu</option>
      <option value='holidays' disabled>Shop by Holiday</option>
      <option value='Christmas' >Christmas</option>
      <option value='4th of July'>4th of July</option>
      <option value='Halloween'>Halloween</option>
      <option value='Easter'>Easter</option>
      <option value='seasons' disabled>Shop by Season</option>
      <option value='Summer'>Summer</option>
      <option value='Fall'>Fall</option>
      <option value='Winter'>Winter</option>
      <option value='Spring'>Spring</option>
    </select>
    )
  }
}

const mapStateToProps = state => {
  return {
    items: state.itemReducer.items,
    
  }
}

export default connect(mapStateToProps)(Menu);