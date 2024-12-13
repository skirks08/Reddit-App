import { createSlice } from '@reduxjs/toolkit';
import { fetchPosts } from '../Actions';

const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: [],
        searchTerm: '',
        selectedCategory: '',
    },
    reducers: {
        fetchPosts: (state, action) => {
            state.posts = action.payload;
        },
        setSearchTerm: (state, action) => {
            state.searchTerm = action.payload;
        },
        setCategory: (state, action) => {
            state.selectedCategory = action.payload;
        },
    },
});

export const { fetchPosts, setSearchTerm } = postsSlice.actions;

export default postsSlice.reducer;