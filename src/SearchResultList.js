import React, { Component } from 'react';
import SearchResult from './SearchResult';
import flattenOpensearchResult from './flattenOpensearchResult';
import './SearchResultList.css';

class SearchResultList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [],
      isLoading: false,
      hasError: false,
    };
  }

  render() {
    if (this.state.isLoading) {
      return (
        <p className="SearchResultList-loading">
          <span
            className="fa fa-circle-o-notch fa-spin fa-3x fa-fw"
            aria-hidden="true">
          </span>
        </p>
      );
    }

    if (this.state.hasError) {
      return (
        <p>Oops, something went wrong!</p>
      );
    }

    const searchResults
      = this.state.searchResults.map((result) =>
          <SearchResult
            title={result.title}
            description={result.description}
            link={result.link}
            key={result.link} />
        );
    return (
      <section className="SearchResultList">
        {searchResults}
      </section>
    );
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      searchResults: [],
      isLoading: true,
      hasError: false,
    });
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.willSearch;
  }

  componentDidUpdate(prevProps) {
    // Without this, there would be ajax requests every second!
    if (prevProps === this.props) return;

    const url = `https://en.wikipedia.org/w/api.php?action=opensearch&origin=*&format=json&formatversion=2&search=${encodeURIComponent(this.props.searchTerm)}`;

    Promise.resolve(fetch(url, {cache: 'no-cache'}))
      .then((response) => {
        if (!response.ok) throw new Error('Network response was not OK');
        return response.json();
      })
      .then(flattenOpensearchResult)
      .then((searchResults) => this.setState({searchResults, isLoading: false}))
      .catch((e) => this.setState({isLoading: false, hasError: true}));
  }
}

export default SearchResultList;
