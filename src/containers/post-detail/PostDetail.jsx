import React, { useState, useEffect } from 'react';
import { findPostById } from '../../services/post.services';

const PostDetail = (props) => {
    const { id } = props.match.params;
    const [post, setPost] = useState({});

    useEffect(() => {
        findPostById(id).then((response) => {
            const posts = response.data.data;
            setPost(posts);
        }).catch((err) => {
            debugger;
        })
       return () => {
            // alert('Chao private');
       } 
    }, []);

    return (
        <div className="text-center container">
            <h1>{post.title}</h1>
            <p>{post.description}</p>
            <img width="400" className="mb-4" src={post.image_url}/>
        </div>
    );
};

export default PostDetail;