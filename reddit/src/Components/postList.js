import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts, setSearchTerm } from '../Slices/postsSlice';
import { Link } from 'react-router-dom';

const postList = () => {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.posts.posts);
    const selectedCategory = useSelector((state) => state.posts.selectedCategory);

    const handleCategoryChange = (event) => {
        dispatch(setCategory(event.target.value));
    };

    useEffect(() => {
        const getPosts = async () => {
            const reponse = await fetch('https://www.reddit.com/r/all/top.json');
            const data = await reponse.json();
            dispatch(fetchPosts(data.data.children));
        };
        getPosts();
    }, [dispatch]);

    const filteredPosts = posts.filter((post) => {
        const matchesSearch = post.data.title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory ? post.data.subreddit === selectedCategory : true;
        return matchesSearch && matchesCategory;
    });

    return (
        <div>
            <select onChange={handleCategoryChange} value={selectedCategory}>
                <option value="">All Categories</option>
                <option value="news">News</option>
                <option value="funny">Funny</option>
            </select>
          <div>
            {filteredPosts.map((post) => (
                <div key={post.data.id}>
                  <Link to={`/post/${post.data.id}`}>
                    <h3>{post.data.title}</h3>
                  </Link>
                    <p>{post.data.selftext}</p>
                </div>
            ))}
        </div>
        </div>
    );
};

export default postList;