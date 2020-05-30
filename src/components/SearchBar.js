import React, {Component} from "react";

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            term: ''
        }
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }


    handleFormSubmit(e) {
        e.preventDefault();

        this.props.handleSubmit(this.state.term);
    }

    render() {

        return (
            <div className='ui segment'>
                <form className='ui form' onSubmit={this.handleFormSubmit}>
                    <div className='field'>
                        <label htmlFor="">Image Search</label>
                        <input
                            type="text"
                            onChange={e => this.setState({term: e.target.value})}
                            value={this.state.term}
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;