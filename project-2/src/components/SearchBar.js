import React, { Component } from 'react';

class SearchBar extends Component {
    state = { term: '' }

    onFormSubmit(e) {
        e.preventDefault();

    }

    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={(e) => this.onFormSubmit(e)}>
                    <div className="field">
                        <label>Image Search</label>
                        <input type="text" onChange={(e) => this.setState({ term: e.target.value })} value={this.state.term} />
                    </div>

                </form>
            </div>
        )
    }
}

export default SearchBar