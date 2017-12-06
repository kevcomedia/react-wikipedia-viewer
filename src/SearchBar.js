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
            class="SearchBar-input"
            type="text"
            onChange={this.handleSearchTermChange} />
          <button class="SearchBar-btn">Search</button>
          <button
            class="SearchBar-btn"
            type="button"
            onClick={this.handleRandomClick}>
              Random
          </button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
