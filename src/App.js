import React, { Component } from 'react';
import SearchBar from './SearchBar';
import SearchResultList from './SearchResultList';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
    };
    this.handleSearchTermSubmit = this.handleSearchTermSubmit.bind(this);
  }

  handleSearchTermSubmit(searchTerm) {
    this.setState({searchTerm});
  }

  render() {
    return (
      <div className="App">
        <SearchBar onSearchTermSubmit={this.handleSearchTermSubmit} />
        <SearchResultList />
      </div>
    );
  }
}

export default App;
