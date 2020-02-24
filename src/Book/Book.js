import React from 'react';
import './Book.css';

export default function Book(props) {
    let {price} = props;

    if(props.price !== "Not for sale"){
        price = `$${price}`;
    }

    return (
        <div className="Book">
            <div className="book_image_container">
                <img src={props.image} width={140} height={180} alt={props.title} />
            </div>
            <div className="book_details_container">
                <h2 className="book_title">{props.title}</h2>
                <p className="book_author">Author: {props.author}</p>
                <p className="book_price">Price: {price}</p>
                <p className="book_description">{props.description}</p>
            </div>

        </div>
    );
}