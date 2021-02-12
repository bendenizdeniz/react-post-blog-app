import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import Alert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { deletePost } from '../../actions';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    alert: {
        marginTop: '0px',
        marginBottom: '5px',
    }
}));

const DeletePost = ({ postDetail }) => {
    const { id } = postDetail.id;
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();
    const errorDeletePost = useSelector(state => state.errorDeletePost);

    const goToPostList = () => {
        history.push(`/`);
    }


    const handleDelete = (id) => {
        dispatch(deletePost(id, goToPostList()));
    }

    return (
        <div>
            {(errorDeletePost) ?
                <Alert className={classes.alert} severity="error">
                    <h4>{errorDeletePost}</h4></Alert>
                : <div></div>}
            <Button
                startIcon={<DeleteIcon />}
                variant="contained"
                color="secondary"
                onClick={() => handleDelete(postDetail.id)}
            >
                DELETE
                </Button>
        </div>
    )
}

export default DeletePost;