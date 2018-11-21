import React, { Component } from 'react';
import ListItem from '../ListItem';
import style from './style.css';

class List extends Component {
  render() {
    const { response } = this.props;
    return (
      <div className="list">
        {response && response.map((item, key) =>
          <ListItem
            title={item.Title}
            year={item.Year}
            poster={item.Poster}
            type={item.Type}
            imdbID={item.imdbID}
            key={key}
          />
        )}
      </div>
    )
  }
}

export default List;
