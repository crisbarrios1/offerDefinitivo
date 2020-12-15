import { Avatar } from '@material-ui/core';
import React from 'react';
import "./Post.css";

const Post = ({userName, caption, imageUrl}) => {
    return (
        <div className='post' >
            <div className="post__header">

            <Avatar className='post__avatar' alt='userName' src='https://www.cristianmonroy.com/wp-content/uploads/2017/11/avatars-avataaars.png'/>
            <h3>Username</h3>
            </div>
            {/* Header-> avatar -> username */}

            {/* image */}
            <img className='post__image' src={imageUrl} alt=""/>
           
            {/* username + caption */}
            <h4 className='post__text' ><strong>{userName}</strong> {caption}</h4>

        </div>
    );
};

export default Post;