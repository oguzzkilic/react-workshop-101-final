import React, { Component } from 'react';
import Menu from  '../Menu';
import style from './style.css';

const menuMock = require('../../../../mocks/menu.json');

class Header extends Component {
  render() {
    return (
      <div className="header">
        <a href="" className="logo">Movie Search</a>
        <Menu menuItems={menuMock} />
      </div>
    )
  }
}

export default Header
