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

    // when app first loads it shows videos of 'usa sport today
    componentDidMount() {
        this.handleTermSubmit('usa sport today')
    }

    handleTermSubmit = async term => {
        const response = await youtube.get('/search', {
            params: {
                q: term,
            }
        });

        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        })
    }


    handleVideoSelect = video => {
        this.setState(
            {selectedVideo: video}
        )
    }

    render() {
        return (
            <div className='ui container' style={{marginTop: '35px'}}>
                <SearchBar onFormSubmit={this.handleTermSubmit}/>
                <div className='ui grid'>
                    <div className="ui row">
                        <div className="eleven wide column">
                            <div className="ui row"><VideoDetail video={this.state.selectedVideo}/>
                            </div>
                        </div>
                        <div className="five wide column">
                            <VideoList
                                videos={this.state.videos}
                                onVideoSelect={this.handleVideoSelect}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
