import axios from "axios";

const KEY = 'AIzaSyBcKXBBNT9DFV7o1rXOY1De-jiFJWVQkOo';

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        maxResults: 5,
        type: 'video',
        key: KEY
    }
});