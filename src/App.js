import React, { Component } from 'react';
import SearchBar from './SearchBar';
import SearchResultList from './SearchResultList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar />
        <SearchResultList />
      </div>
    );
  }
}

export default App;
