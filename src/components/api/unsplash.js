import axios from 'axios';

export default axios.create({
    headers: {
        Authorization: 'Client-ID Aw081Q4CfKSRjJE0wTSXIJKDmRkH_xilWenNlmR8yKg'
    },
    baseURL: 'https://api.unsplash.com/'
})