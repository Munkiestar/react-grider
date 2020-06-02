import React, {Component} from 'react';

import SearchBar from "./components/SearchBar/SearchBar";
import youtube from "./api/youtube";
import VideoList from "./components/VideoList/VideoList";


class App extends Component {

    state = {
        videos: [],
        selectedVideo: null
    }


    handleTermSubmit = async term => {
        const response = await youtube.get('/search', {
            params: {
                q: term,
                // part: 'snippet',
                // maxResults: 5,
                // type: 'video',
                // key: KEY
            }
        });

        this.setState({videos: response.data.items})
    }


    render() {
        return (
            <div className='ui container' style={{marginTop: '35px'}}>
                <SearchBar onFormSubmit={this.handleTermSubmit}/>
                <VideoList videos={this.state.videos}/>
            </div>
        );
    }
}

export default App;
