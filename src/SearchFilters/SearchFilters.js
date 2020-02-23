import React from 'react';
import './SearchFilters.css';

class SearchFilters extends React.Component {
    render() {
        return (
            <div className="SearchFilters">
                <form className="SearchFilters_form">
                    <div className="print-type-containter">
                        <label htmlFor="print-type">Print Type:</label>
                        <select id="print-type">
                            <option value="all">All</option>
                        </select>
                    </div>
                    <div className="book-type-container">
                        <label htmlFor="book-type">Book Type:</label>
                        <select id="book-type">
                            <option value="none">No Filter</option>
                        </select>
                    </div>
                </form>
            </div>
        );
    };
}

export default SearchFilters;