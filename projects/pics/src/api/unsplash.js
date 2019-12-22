import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID ed3d44ae5434874e16474535e1c045d0ac779e317ad1bb2e12590ba767898e91'
    }
});