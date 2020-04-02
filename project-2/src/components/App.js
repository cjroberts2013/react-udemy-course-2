import React, { Component } from 'react';
import SearchBar from './SearchBar';
import axios from 'axios';

class App extends Component {

    onSearchSubmit(term) {
        console.log(term)
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onSubmit={this.onSearchSubmit} />
            </div>
        )
    }
}

export default App