import React, {Component} from 'react';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            latitude: null,
            errorMsg: ''
        }
        window.navigator.geolocation.getCurrentPosition(
            position => {
                // console.log(position)
                this.setState({latitude: position.coords.latitude})
            },
            error => {
                console.log(error)
                this.setState({
                    errorMsg: error.message
                });
            }
        );
    }

    render() {

        if (this.state.errorMsg && !this.state.latitude) {
            return <div>Error: {this.state.errorMsg}</div>
        }

        if (!this.state.errorMsg && this.state.latitude) {
            return <div>Latitude: {this.state.latitude}</div>
        }

        return <div>Loading!!</div>

    }
}

export default App;
