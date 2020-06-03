import React, {Component} from 'react';

import SearchBar from "./components/SearchBar/SearchBar";
import youtube from "./api/youtube";
import VideoList from "./components/VideoList/VideoList";
import VideoDetail from "./components/VideoDetail/VideoDetail";


class App extends Component {

    state = {
        videos: [],
        selectedVideo: null
    }


    handleTermSubmit = async term => {
        const response = await youtube.get('/search', {
            params: {
                q: term,
            }
        });

        this.setState({videos: response.data.items})
    }


    handleVideoSelect = video => {
        this.setState({selectedVideo: video})
    }

    render() {
        return (
            <div className='ui container' style={{marginTop: '35px'}}>
                <SearchBar onFormSubmit={this.handleTermSubmit}/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList
                    videos={this.state.videos}
                    onVideoSelect={this.handleVideoSelect}
                />
            </div>
        );
    }
}

export default App;
