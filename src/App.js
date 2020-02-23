import React from 'react';
import './App.css';
import SearchOptions from './SearchOptions/SearchOptions';
import BookList from './BookList/BookList';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App_header">
          <h1>Google Book Search</h1>
        </div>
        <SearchOptions />
        <BookList />
      </div>
    );
  };
}

export default App;