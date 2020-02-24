import React from 'react';
import './BookList.css';
import Book from '../Book/Book';

class BookList extends React.Component {
    render() {

        const books = this.props.books
            .map((book, i) => {
                const isForSale = book.saleInfo.listPrice
                    ? book.saleInfo.listPrice.amount
                    : "Not for sale"
                ;

                const hasAuthor = book.volumeInfo.authors
                    ? book.volumeInfo.authors[0]
                    : "No Author listed"
                ;

                const hasImage = book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail
                    ? book.volumeInfo.imageLinks.thumbnail
                    : "https://image.shutterstock.com/image-vector/no-image-available-vector-illustration-260nw-744886198.jpg"
                ;

                return (
                    <Book 
                        key={i}
                        title={book.volumeInfo.title}
                        author={hasAuthor}
                        price={isForSale}
                        description={book.volumeInfo.description}
                        image={hasImage}   
                    />
                )
            })

        return (
            <div className="BookList">
                {books}
            </div>
        );
    };
}

export default BookList;