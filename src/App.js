import React from 'react';
import './App.css';
import faker from "faker";

import CommentDetail from "./components/CommentDetail";

class App extends React.Component {
    render() {
        return (
            <div className='ui container comments'>
                <CommentDetail
                date='Today at 6:00PM'
                author={'Sam'}
                comment='Nice post bro!'
                authorImg={faker.image.avatar()}
                />
                <CommentDetail
                date='Yesterday at 2AM'
                author={'Janine'}
                comment='Encouraging!'
                authorImg={faker.image.avatar()}
                />
                <CommentDetail
                date='Today at 1:00PM'
                author={'Kyle'}
                comment={`supper, didn't know that!`}
                authorImg={faker.image.avatar()}
                />
            </div>
        );
    }
}

export default App;
