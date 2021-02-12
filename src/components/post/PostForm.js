import React, { useState, useEffect } from 'react'
import { Api } from '../Api';
import TextField from '@material-ui/core/TextField';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import SaveIcon from '@material-ui/icons/Save';
import Alert from '@material-ui/lab/Alert';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addPost, editPost } from '../../actions';

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
    button1: {
        marginRight: '10px',
    },
    root2: {
        width: '100%',
        '& > * + *': {
            marginLeft: '515px',
            paddingBottom: '-20px',
            marginTop: '-10px'
        },
        marginLeft: '250px',
        marginRight: '250px',
        marginBottom: '20px'
    },
}));
const PostForm = (props) => {
    const classes = useStyles();

    const { id } = useParams();

    const history = useHistory();

    const [err, setErr] = useState(''); //error handling

    const [text, setText] = useState({
        title: '',
        content: ''
    });

    const dispatch = useDispatch();

    useEffect(() => {
        if (props.text?.title && props.text?.content)
            setText({
                title: props.text.title,
                content: props.text.content
            })
    }, [props.text])


    const handleOnChange = (event) => {
        event.preventDefault();
        setText({ ...text, [event.target.name]: event.target.value })
    };

    const goToPost = () => {
        history.push(`/posts/${id}`);
    }

    const goToPostList = () => {
        history.push(`/`);
    }

    const onSubmitHandler = (event, text) => {
        event.preventDefault();

        setErr('');

        if (props.text?.title)    //put
        {
            dispatch(editPost(id, text, goToPost()));

        } else  //post
        {
            dispatch(addPost(text, goToPostList()));
        }


    }

    return (
        <div>
            {(err) ?
                <Grid container justify="center" spacing={3}>
                    <Alert className={classes.root2} severity="error">
                        <h4>{err}</h4>
                    </Alert>
                </Grid>
                : <div></div>}

            <Container maxWidth="lg" className="classes.blogsContainer">
                <Grid container justify="center" spacing={3}>
                    <Grid item xs={12} sm={6} md={6}>
                        <Card >
                            <Container maxWidth="lg">
                                <Grid container justify="center" spacing={3}>
                                    <form className={classes.form} noValidate
                                        onSubmit={(event) => {
                                            onSubmitHandler(event, text);
                                        }}>
                                        <Grid>
                                            <TextField
                                                style={{ marginTop: "20px" }}
                                                required
                                                label="Title"
                                                name="title"
                                                value={text.title}
                                                onChange={handleOnChange} />
                                        </Grid>

                                        <Grid container justify="center">
                                            <TextField
                                                style={{ marginTop: "20px" }}
                                                variant="outlined"
                                                label="content"
                                                multiline
                                                name="content"
                                                value={text.content}
                                                onChange={handleOnChange}
                                                rows={5}
                                            />
                                        </Grid>

                                        <Grid container justify="center" style={{ marginTop: "20px", marginBottom: "40px" }}>
                                            <Button
                                                className={classes.button}
                                                type="submit"
                                                variant="contained"
                                                color="primary"
                                                onClick={(event) => {
                                                    onSubmitHandler(event, text);
                                                }}
                                            ><SaveIcon className={classes.button1} />Save</Button>
                                        </Grid>

                                    </form>
                                </Grid>
                            </Container>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
};

export default PostForm;
