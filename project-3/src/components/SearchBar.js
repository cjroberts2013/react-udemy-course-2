import React, { Component } from 'react';

class SearchBar extends Component {
    state = { term: '' };

    onInputChange = (e) => {
        this.setState({ term: e.target.value })
    }

    onSubmitHandler = (e) => {
        e.preventDefault();

        //add callback from parent component
        this.props.onFormSubmit(this.state.term)
    }

    render() {
        return (
            <div className='search-bar ui segment'>
                <form className='ui form' onSubmit={this.onSubmitHandler} >
                    <div className='field'>
                        <label>Video Search</label>
                        <input type='text' value={this.state.term} onChange={this.onInputChange} />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar