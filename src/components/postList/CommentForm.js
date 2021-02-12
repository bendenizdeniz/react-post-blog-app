import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Chip from '@material-ui/core/Chip';
import { Container } from '@material-ui/core';

const INITIAL_COMMENT = { display_name: '', body: '' };

const CommentForm = (props) => {

    const [commentBody, setCommentBody] = useState(INITIAL_COMMENT);

    const handleOnChange = (event) => {
        setCommentBody({ ...commentBody, [event.target.name]: event.target.value })
    }

    const useStyles = makeStyles({
        root: {
            marginTop: '100px',
            minWidth: 275,

        },
        bullet: {
            display: 'inline-block',
            margin: '0 2px',
            transform: 'scale(0.8)',
        },
        title: {
            fontSize: 14,
        },
        pos: {
            marginBottom: 12,
        },

    });

    const classes = useStyles();
    return (
        <div>
            <br />
            <Chip color="primary" label="ADD A COMMENT" color="primary" />

            <Container maxWidth="lg" className="classes.blogsContainer">
                <Grid container justify="center" spacing={3}>
                    <Grid item xs={12} sm={6} md={6}>
                        <Card >
                            <Container maxWidth="lg">
                                <Grid container justify="center" spacing={3}>
                                    <form className={classes.form} noValidate
                                        onSubmit={(event) => {
                                            props.onSubmitHandler(event, commentBody);
                                            setCommentBody(INITIAL_COMMENT);
                                        }}>
                                        <Grid>
                                            <TextField
                                                style={{ marginTop: "20px" }}
                                                required
                                                id="display_name"
                                                label="Enter your name"
                                                name="display_name"
                                                value={commentBody.display_name}
                                                onChange={handleOnChange}
                                            />
                                        </Grid>
                                        <Grid>
                                            <TextField
                                                style={{ marginTop: "20px" }}
                                                variant="outlined"
                                                id="text-area"
                                                label="Your Comment"
                                                name="body"
                                                multiline
                                                value={commentBody.body}
                                                onChange={handleOnChange}
                                                rows={5}
                                            />
                                        </Grid>
                                        <Grid container justify="center" style={{ marginTop: "20px", marginBottom: "40px" }}>
                                            <Button
                                                type="submit"
                                                variant="contained"
                                                color="primary"
                                                onClick={(event) => {
                                                    props.onSubmitHandler(event, commentBody)
                                                }}
                                            >COMMENT</Button>
                                        </Grid>

                                    </form>
                                </Grid>
                            </Container>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </div >
    )
}

export default CommentForm;
