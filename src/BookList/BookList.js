import React from 'react';
import './BookList.css';
import Book from '../Book/Book';

class BookList extends React.Component {
    render() {
        return (
            <div className="BookList">
                <Book />
            </div>
        );
    };
}

export default BookList;