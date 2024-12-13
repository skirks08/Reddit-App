import { createSlice } from '@reduxjs/toolkit';
import { fetchPosts } from '../Actions';

const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: [],
        searchTerm: '',
    },
    reducers: {
        fetchPosts: (state, action) => {
            state.posts = action.payload;
        },
        setSearchTerm: (state, action) => {
            state.searchTerm = action.payload;
        },
    },
});

export const { fetchPosts, setSearchTerm } = postsSlice.actions;

export default postsSlice.reducer;