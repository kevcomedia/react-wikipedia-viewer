import React, { Component } from 'react';
import SearchResult from './SearchResult';

class SearchResultList extends Component {
  render() {
    return (
      <section className="SearchResultList">
        {/* TODO dynamically fill SearchResults */}
        <SearchResult
          title="Title 1"
          description="This is some text"
          link="http://example.com" />
        <SearchResult
          title="Title 2"
          description="The quick brown fox"
          link="http://example.com" />
        <SearchResult
          title="Title 3"
          description="Jumps over the lazy dog"
          link="http://example.com" />
      </section>
    );
  }
}

export default SearchResultList;
