import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts, setSearchTerm } from '../Slices/postsSlice';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const postList = () => {
    const dispatch = useDispatch();
    const { posts, status, error } = useSelector((state) => state.posts);
    const selectedCategory = useSelector((state) => state.posts.selectedCategory);

    useEffect(() => {
        dispatch(fetchPosts('all'));
    }, [dispatch]);

    if (status === 'loading') {
        return <p>Loading...</p>
    };

    useEffect(() => {
        if (status === 'failed') {
            toast.error(`Error: ${error}`);
        }
    }, [status, error]);

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
                    <p>{post.data.selftext || 'No content available'}</p>
                </div>
            ))}
        </div>
        </div>
    );
};

export default postList;