import axios from 'axios';

const KEY = 'AIzaSyBXM0msibM9uqFRXxTQis4cnruCS8FEZh8';


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: `${KEY}`
    }
})