import postsReducer, { fetchPosts, setSearchTerm } from './postsSlice';

describe('postSlice', () => {
    const initialState = {
        posts: [],
        searchTerm: '',
    };

    it('should handle fetchPosts', () => {
        const posts = [{ id: '1', title: 'Test Post' }];
        const newState = postsReducer(initialState, fetchPosts(posts));
        expect(newState.posts).toEqual(posts);
    });

    it('should handle setSearchTerm', () => {
        const searchTerm = 'test';
        const newState = postsReducer(initialState, setSearchTerm(searchTerm));
        expect(newState.searchTerm).toBe(searchTerm);
    });
});