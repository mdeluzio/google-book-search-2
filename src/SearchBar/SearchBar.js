import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
    render() {
        return (
            <div className="SearchBar">
                <form className="SearchBar_form">
                    <label htmlFor="book">Search:</label>
                    <input 
                        type="text" 
                        id="book" 
                        name="book"
                        placeholder="Search for a title"
                    />
                    <button type="submit">Search</button>
                </form>
            </div>
        );
    };
}

export default SearchBar;