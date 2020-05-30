import React, {Component} from 'react';
import './App.css'
import SearchBar from "./components/SearchBar";

class App extends Component {

    onSearchSubmit(term) {
        console.log(term)
        // Aw081Q4CfKSRjJE0wTSXIJKDmRkH_xilWenNlmR8yKg
    }

    render() {
        return (
            <div className='ui container' style={{marginTop: '25px'}}>
                <SearchBar handleSubmit={this.onSearchSubmit}/>
            </div>
        );
    }
}

export default App;
