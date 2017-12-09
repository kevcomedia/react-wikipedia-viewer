import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
    this.handleSearchTermSubmit = this.handleSearchTermSubmit.bind(this);
    this.handleRandomClick = this.handleRandomClick.bind(this);
  }

  handleSearchTermChange(event) {
    this.props.onSearchTermChange(event.target.value);
  }

  handleSearchTermSubmit(event) {
    event.preventDefault();
    this.props.onSearchTermSubmit();
  }

  handleRandomClick(event) {
    window.open('https://en.wikipedia.org/wiki/Special:Random');
  }

  render() {
    return (
      <div className="SearchBar">
        <h1>Wikipedia Viewer</h1>
        <form onSubmit={this.handleSearchTermSubmit}>
          <input
            className="SearchBar-input"
            type="text"
            placeholder="Search Wikipedia"
            autoFocus
            onChange={this.handleSearchTermChange} />
          <button className="SearchBar-btn">
            <span
              className="fa fa-search fa-lg fa-fw"
              aria-hidden="true"></span>
          </button>
          <button
            className="SearchBar-btn"
            type="button"
            onClick={this.handleRandomClick}>
            <span
              className="fa fa-random fa-lg fa-fw"
              aria-hidden="true"></span>
          </button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
