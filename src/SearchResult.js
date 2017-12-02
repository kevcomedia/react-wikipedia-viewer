import React, { Component } from 'react';

class SearchResult extends Component {
  render() {
    return (
      <section className="SearchResult">
        <h2 className="SearchResult-title">
          {/* TODO replace href with correct URL */}
          <a href="#" target="_blank" rel="nofollow noopener">
            {this.props.title}
          </a>
        </h2>
        <p className="SearchResult-description">
          {this.props.description}
        </p>
      </section>
    );
  }
}

export default SearchResult;
