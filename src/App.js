import React from 'react';
import './App.css';

import CommentDetail from "./components/CommentDetail";

class App extends React.Component {
    render() {
        return (
            <div className='ui container comments'>
                <CommentDetail
                date='Today at 6:00PM'
                author={'Sam'}
                comment='Nice post bro!'
                />
                <CommentDetail
                date='Yesterday at 2AM'
                author={'Janine'}
                comment='Encouraging!'
                />
                <CommentDetail
                date='Today at 1:00PM'
                author={'Kyle'}
                comment={`supper, didn't know that!`}
                />
            </div>
        );
    }
}

export default App;
