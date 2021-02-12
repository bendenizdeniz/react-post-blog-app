import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import PrimarySearchAppBar from '../root/PrimarySearchAppBar';
import PostComments from './PostComments';
import { useHistory, useParams } from 'react-router-dom';
import DeletePost from '../post/DeletePost';
import { addComment, getPost } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';


const PostDetail = (props) => {

    const { id } = props.match.params;
    const dispatch = useDispatch();
    const postDetail = useSelector(state => state.postDetail);
    const history = useHistory();

    const onSubmitHandler = (event, commentBody) => {
        event.preventDefault();
        dispatch(addComment(id, commentBody));
    }

    useEffect(() => {
        dispatch(getPost(id))
    }, [])

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
        forButtons: {
            marginTop: '30px',
        },
        leftButton: {
            marginRight: '30px',
        },
        rightButton: {
            marginLeft: '25px',
        },
        backButton: {
            marginTop: '30px'
        },

    });

    const classes = useStyles();

    const goToEdit = () => {
        history.push(`/posts/${id}/edit`);
    }

    const goToPostList = () => {
        history.push(`/`);
    }

    return (
        <div>
            <PrimarySearchAppBar />
            <Button
                className={classes.backButton}
                variant="contained"
                color="primary"
                onClick={() => goToPostList()}>
                GO TO POST LIST
                </Button>
            <Grid
                container justify="center"
                spacing={3}>
                <Card className={classes.root}>
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            {postDetail.id}
                        </Typography>
                        <Typography variant="h5" component="h2">
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            {postDetail.title}
                        </Typography>
                        <Typography className='typ' variant="body2" component="p">
                            {postDetail.content}
                            <br /><br />
                            {postDetail.created_at}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>

            <Grid
                className={classes.forButtons}
                container justify="center"
                spacing={3}>
                <Button
                    className={classes.leftButton}
                    variant="contained"
                    color="default"
                    onClick={() => goToEdit()}>
                    EDIT
                </Button>
                
                <DeletePost postDetail={postDetail} />
            </Grid>

            <PostComments comments={postDetail.comments} onSubmitHandler={onSubmitHandler} />

        </div>
    )
}

export default PostDetail;