import React from 'react';
import './App.css';
import SearchOptions from './SearchOptions/SearchOptions';
import BookList from './BookList/BookList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      books: [],
    }
  }

  getBooksOnSearch(searchTerm) {
    searchTerm = searchTerm.toLowerCase().trim();
    const url = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=AIzaSyDeVvFgR84si3ZVIoJERnD1TPdS6YLww0A`;

    fetch(url)
      .then(res => {
        if(!res.ok) {
          throw new Error('Something went wrong, please try again later');
        }
        return res.json();
      })
      .then(data => {
        this.setState({
          books: data.items
        })
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });
  }


  render() {
    const error = this.state.error
      ? <div className="error"> {this.state.error} </div>
      : ""
    ;

    console.log(this.state.books)
    return (
      <div className="App">
        <div className="App_header">
          <h1>Google Book Search</h1>
          {error}
        </div>
        <SearchOptions getBooks={searchTerm => this.getBooksOnSearch(searchTerm)} />
        <BookList books={this.state.books} />
      </div>
    );
  };
}

export default App;