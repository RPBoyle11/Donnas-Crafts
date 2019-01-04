import React from 'react';
import { Component } from 'react';

class Menu extends React.Component {
  render() {
    return (
    <select>
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

export default Menu;