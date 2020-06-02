import React, {Component} from 'react';

class SearchBar extends Component {

    state = {term: ''}

    handleInputChange = e => {
        this.setState({term: e.target.value})
    }

    handleFormSubmit = e => {
        e.preventDefault();

        this.props.onFormSubmit(this.state.term)
    }

    render() {

        return (
            <div className='search-bar ui segment'>
                <form onSubmit={this.handleFormSubmit} className='form ui'>
                    <div className='field'>
                        <label htmlFor="">Video Search</label>
                        <input
                            value={this.state.term}
                            onChange={this.handleInputChange}
                            type="text"
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;