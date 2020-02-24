import React from 'react';
import './SearchOptions.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchFilters from '../SearchFilters/SearchFilters'

class SearchOptions extends React.Component {
    render() {
        return (
            <div className="SearchOptions">
                <SearchBar getBooks={this.props.getBooks} />
                <SearchFilters />
            </div>
        );
    };
}

export default SearchOptions;