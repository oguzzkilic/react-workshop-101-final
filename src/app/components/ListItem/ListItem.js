import React, { Component } from 'react';
import style from './style.css';

// class ListItem extends React {
// constructor(props) {
//   super(props);
//
//   this.handleClick = this.handleClick.bind(this);
// }
//   render() {
//     return(
//
//     )
//   }
// }

class ListItem extends Component {
  render() {
    const { title, year, poster, type, imdbID } = this.props;
      return (
        <div className="list-item">
          <div className="poster">
            <img src={poster} alt="" />
          </div>

          <div className="details">
            <h1>Title:{title}</h1>
            <h3>Year: {year}</h3>
            <h3>Type: {type}</h3>

            <a href={`https://www.imdb.com/title/${imdbID}`} target="_blank">IMDB</a>
          </div>
        </div>
      )
  }
}

export default ListItem;
