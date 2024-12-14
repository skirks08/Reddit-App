import axios from 'axios';

const REDDIT_BASE_URL = 'https://www.reddit.com';

const fetchFromReddit = async () => {
    try {
        const response = await axios.get(`${REDDIT_BASE_URL}${endpoint}`);
        return response.data;
    } catch (error) {
        console.error('Reddit API Error:', error.message);
        throw new Error('Failed to fetch data from Reddit. Please try again later.');
    }
};

export default fetchFromReddit;