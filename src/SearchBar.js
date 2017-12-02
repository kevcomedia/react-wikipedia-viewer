import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.handleSearchTermSubmit = this.handleSearchTermSubmit.bind(this);
  }

  handleSearchTermSubmit(event) {
    event.preventDefault();
    // I'm not aware of a more "React-y" way of getting the input value, if any.
    this.props.onSearchTermSubmit(event.target[0].value);
  }

  render() {
    return (
      <div className="SearchBar">
        <h1>Wikipedia Viewer</h1>
        <form onSubmit={this.handleSearchTermSubmit}>
          <input type="text" />
          <button>Search</button>
          <button type="button">Random</button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
