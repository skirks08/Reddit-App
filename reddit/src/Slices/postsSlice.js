import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import fetchFromReddit from '../utilities/redditApi';

export const fetchPosts = createAsyncThunk(
    'posts/fetchPosts',
    async (subreddit, { rejectWithValue }) => {
        try {
            const data = await fetchFromReddit(`/r/${subreddit}.json`);
            return data.data.children.map((child) => child.data);
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: [],
        status: 'idle',
        searchTerm: '',
        selectedCategory: '',
        error: null,
        cache: {},
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
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.posts = action.payload;

                state.cache[action.meta.arg] = action.payload;
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload || 'Something went wrong';
            })
    },
});

export const { setSearchTerm } = postsSlice.actions;

export default postsSlice.reducer;