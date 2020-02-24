import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: ""
        };
    };

    handleSearchInput(value) {
        this.setState({
            searchTerm: value
        });
    };

    handleSubmit(e) {
        e.preventDefault();
        this.props.getBooks(this.state.searchTerm)
        
        this.setState({
            searchTerm: ""
        });
    };

    render() {
        return (
            <div className="SearchBar">
                <form className="SearchBar_form" onSubmit={e => this.handleSubmit(e)}>
                    <label htmlFor="book">Search:</label>
                    <input 
                        type="text" 
                        id="book" 
                        name="book"
                        placeholder="Search for a title"
                        value={this.state.searchTerm}
                        onChange={e => this.handleSearchInput(e.target.value)}
                    />
                    <button type="submit">Search</button>
                </form>
            </div>
        );
    };
}

export default SearchBar;