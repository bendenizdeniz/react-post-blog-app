import React from 'react'
import CommentForm from './CommentForm';
import CommentList from './CommentList';

const postComments = (props) => {
    return (
        <div>
            <CommentList comments={props.comments} />
            <CommentForm onSubmitHandler={props.onSubmitHandler} />
        </div>
    )
}

export default postComments;