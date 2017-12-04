import React, { Component } from 'react';
import SearchBar from './SearchBar';
import SearchResultList from './SearchResultList';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      willSearch: false,
    };
    this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
    this.handleSearchTermSubmit = this.handleSearchTermSubmit.bind(this);
  }

  handleSearchTermChange(searchTerm) {
    this.setState({
      searchTerm,
      willSearch: false,
    });
  }

  handleSearchTermSubmit() {
    this.setState({willSearch: true});
  }

  render() {
    return (
      <div className="App">
        <SearchBar
          onSearchTermChange={this.handleSearchTermChange}
          onSearchTermSubmit={this.handleSearchTermSubmit} />
        <SearchResultList
          searchTerm={this.state.searchTerm}
          willSearch={this.state.willSearch} />
      </div>
    );
  }
}

export default App;
