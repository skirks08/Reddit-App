import React, { useState, useEffect} from "react";
import { useDispatch } from "react-redux";
import { debounce } from 'lodash';
import { fetchPosts } from "../Slices/postsSlice";

const PostSearch = () => {
    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = React.useState('');

    const debouncedSearch = debounce((searchTerm) => {
        dispatch(fetchPosts(searchTerm));
    }, 500);

    useEffect(() => {
        debouncedSearch(term);
        return () => {
            debouncedSearch.cancel();
        };
    }, [term]);

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <input 
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search posts"
        />
    );
};

export default PostSearch;