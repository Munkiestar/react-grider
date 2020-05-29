import React from 'react';
import './FontawesomeIcons/index';

import SeasonDisplay from "./SeasonDisplay/SeasonDisplay";
import Spinner from './Spinner/Spinner';

class App extends React.Component {

    state = {lat: null, errorMessage: ''};

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({lat: position.coords.latitude})
            },
            err => {
                this.setState({errorMessage: err.message})
            }
        );
    }


    render() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>;
        }

        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay latitude={this.state.lat}/>;
        }

        return <Spinner message='Please accept location request'/>
    }

}

export default App;
