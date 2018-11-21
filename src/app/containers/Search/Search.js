import React, { Component } from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import List from '../../components/List';
import style from './style.css';

class Search extends Component {
  constructor(props) {
    super(props);

    this.handleSearch = this.handleSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      title: "",
      res: []
    }
  }

  handleChange(event) {
    this.setState({
      title: event.target.value
    });
  }

  handleSearch() {
    if(this.state.title !== ''){
      fetch(`http://www.omdbapi.com/?s=${this.state.title}&apikey=4df904a0&type=movie`)
      .then(response => {
          response.json().then(res => this.setState({
            res : res.Search
          }))
        }
      )
    }
  }

  render() {
    return (
      <div className="search">
        <Input
          type="text"
          name="search"
          onChange={this.handleChange}
        />
        <br /><br />
        <Button label="Search" type="button" onClick={this.handleSearch} />

        <List response={this.state.res} />
      </div>
    )
  }
}

export default Search;
