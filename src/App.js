import React, {Component} from 'react';
import unsplash from "./components/api/unsplash";
import SearchBar from "./components/SearchBar";
import ImageList from '../src/components/ImageList/ImageList';

class App extends Component {
    state = {images: []}

    onSearchSubmit = async (term) => {
        const response = await unsplash.get('search/photos', {
            params: {query: term}
        });

        this.setState({images: response.data.results})
    }

    render() {
        return (
            <div className='ui container' style={{marginTop: '25px'}}>
                <SearchBar handleSubmit={this.onSearchSubmit}/>
                <ImageList slike={this.state.images}/>
            </div>
        );
    }
}

export default App;
