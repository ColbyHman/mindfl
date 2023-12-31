import axios from 'axios';

export default axios.create({
    baseURL: 'http://localhost:3000/dev',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json'
    }
})