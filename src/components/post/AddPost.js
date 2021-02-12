import React from 'react'
import PostForm from './PostForm';

const AddPost = (props) => {
    return (
        <div>
            <PostForm handlePost={props.handlePost}/>
        </div>
    )
}

export default AddPost;