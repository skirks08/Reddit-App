import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../Slices/postsSlice';

const postList = () => {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.posts.posts);

    useEffect(() => {
        const getPosts = async () => {
            const reponse = await fetch('https://www.reddit.com/r/all/top.json');
            const data = await reponse.json();
            dispatch(fetchPosts(data.data.children));
        };
        getPosts();
    }, [dispatch]);

    return (
        <div>
            {posts.map((post) => (
                <div key={post.data.id}>
                    <h3>{post.data.title}</h3>
                    <p>{post.data.selftext}</p>
                </div>
            ))}
        </div>
    );
};

export default postList;