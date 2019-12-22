import axios from 'axios';

const KEY = 'AIzaSyC-tcnrdob_-TrlVLLa8zW1qBqXKsh3tlk';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});