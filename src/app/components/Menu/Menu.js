import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeElementKey: ""
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(item) {
    this.setState({
      activeElementKey: item
    })
  }

  render() {
    const { activeElementKey } = this.state;
    return (
      <div className="menu">
        {this.props.menuItems.items.map((item, key) => (
          <a
            href="#"
            key={key}
            onClick={() => this.handleClick(key)}
            className={`${key === activeElementKey ? 'active' : ''}`}
          >{item}</a>
        ))}
      </div>
    );
  }
}

Menu.propTypes = {
  menuItems: PropTypes.object
}

export default Menu;
