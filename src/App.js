import React, {Component} from 'react';

import SearchBar from "./components/SearchBar/SearchBar";
import youtube from "./api/youtube";

const KEY = 'AIzaSyBXM0msibM9uqFRXxTQis4cnruCS8FEZh8'

handleTermSubmit = async term => {
    const response = await youtube.get('/search', {
        params: {
            q: term,
            part: 'snippet',
            maxResults: 5,
            type: 'video',
            key: KEY
        }
    })
}

class App extends Component {
    render() {
        return (
            <div className='ui container'>
                <SearchBar/>
            </div>
        );
    }
}

export default App;
