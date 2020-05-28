import React from 'react';
import './App.css';
import faker from "faker";
import ApprovalCard from './components/ApprovalCard';


import CommentDetail from "./components/CommentDetail";

class App extends React.Component {
    render() {
        return (
            <div className='ui container comments'>
                <ApprovalCard>
                    <CommentDetail
                        date='Today at 6:00PM'
                        author={'Sam'}
                        comment='Nice post bro!'
                        authorImg={faker.image.avatar()}
                    />
                </ApprovalCard>C

                <ApprovalCard>
                    <CommentDetail
                        date='Yesterday at 2AM'
                        author={'Janine'}
                        comment='Encouraging!'
                        authorImg={faker.image.avatar()}
                    />
                </ApprovalCard>

                <ApprovalCard>
                    <CommentDetail
                        date='Today at 1:00PM'
                        author={'Kyle'}
                        comment={`supper, didn't know that!`}
                        authorImg={faker.image.avatar()}
                    />
                </ApprovalCard>
            </div>
        );
    }
}

export default App;
