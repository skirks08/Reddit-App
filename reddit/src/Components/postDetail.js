import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const postDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [post, setPost] = useState(null);

    useEffect(() => {
        const fetchPostDetails = async () => {
            const response = await fetch(`https://www.reddit.com/api/info.json?id=t3_${id}`);
            const data = await response.json();
            if (data.data.children.length > 0) {
                setPost(data.data.children[0].data);
            }
        };
        fetchPostDetails();
    }, [id]);

    if (!post) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <button onClick={() => navigate(-1)}>Back</button>
            <h1>{post.title}</h1>
            <p>{post.selftext}</p>
            <p><strong>Subreddit:</strong> {post.subreddit}</p>
            <p><strong>Author:</strong> {post.author}</p>
            <p><strong>Score:</strong> {post.score}</p>
        </div>
    );
};

export default postDetail;