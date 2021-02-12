import React, { useEffect, useState } from 'react'
import { Api } from '../Api';
import PostForm from './PostForm';
import { makeStyles } from '@material-ui/core/styles';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
    form: {
        marginTop: '250px'
    }
}))

const EditPost = (props) => {
    const classes = useStyles();
    //const [text, setText] = useState({});
    const { id } = useParams(); //props.match.params;

    const text = useSelector(state => state.postDetail);


    //useEffect(() => {
        // Api().get(`posts/${id}`)
        //     .then(res => {
        //         //setText({ title: res.data.title, content: res.data.content });
        //         setText(res.data);
        //     })
        //     .catch(err => {
        //         console.log(err);
        //     })
    //}, [])


    return (
        <div className={classes.form}>
            <PostForm text={text} />
        </div>
    )
}

export default EditPost;