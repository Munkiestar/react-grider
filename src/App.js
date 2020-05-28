import React from 'react';
import './App.css';

class App extends React.Component {
    render() {
        return (
            <div className='ui container comments'>
                <div className="comment">
                    <a href="/" className='avatar'>
                        <img src="" alt="avatar"/>
                    </a>
                    <div className="content">
                        <a href="/" className='author'>
                            Sam
                        </a>
                    </div>
                    <div className="metadata">
                        <span className='date'>Today at 6:00PM</span>
                    </div>
                    <div className="text">Nice blog Post!</div>
                </div>
            </div>
        );
    }
}

export default App;
