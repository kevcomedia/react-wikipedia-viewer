import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    return (
      <div className="SearchBar">
        <h1>Wikipedia Viewer</h1>
        <form>
          <input type="text" />
          <button>Search</button>
          <button type="button">Random</button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
