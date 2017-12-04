import React, { Component } from 'react';

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
          <input type="text" onChange={this.handleSearchTermChange} />
          <button>Search</button>
          <button type="button" onClick={this.handleRandomClick}>Random</button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
