import React from 'react';
import './FontawesomeIcons/index';

import SeasonDisplay from "./SeasonDisplay/SeasonDisplay";

class App extends React.Component {
    // constructor(props) {
    //     super(props);
    //
    //     this.state = {lat: null, errorMessage: ''};
    // }
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

        return <div> "Please accept location request" </div>;
    }

}

export default App;
