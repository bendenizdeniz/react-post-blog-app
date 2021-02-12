import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Collapse from '@material-ui/core/Collapse';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import { red } from '@material-ui/core/colors';
import AddPost from '..//post/AddPost';
import './Card.css';
import PrimarySearchAppBar from '../root/PrimarySearchAppBar';
import { Api } from '../Api';
import { useHistory } from 'react-router-dom';
import { getTextList } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';


const useStyles = makeStyles((theme) => ({

    hero: {
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
    url('https://wallpaperaccess.com/full/2433830.jpg')`,
        height: "500px",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        fontSize: "6rem",
        fontFamily: 'Garamond',
        fontStyle: 'italic'
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    blogsContainer: {
        paddingTop: theme.spacing(3)
    },
    root: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
    card: {
        marginTop: '50px',
        maxWidth: "100p%",
    },
    root2: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.primary,
    },
    button2: {
        marginLeft: '445px',
        marginTop: '-20px',
    },

}));

const PostList = (props) => {
    const classes = useStyles();

    //const [textList, setTextList] = useState([]);
    const textList = useSelector(state => state.textList);

    const history = useHistory();

    const dispatch = useDispatch();

    const [trigger, setTrigger] = useState(false);

    const goToPost = (itemID) => {
        history.push(`/posts/${itemID}`);
    }

    useEffect(() => {
        dispatch(getTextList());
    }, [trigger])

    const handlePost = () => {
        setTrigger(!trigger);
    }

    return (
        <div>
            <PrimarySearchAppBar></PrimarySearchAppBar>
            <Box className={classes.hero}>
                <Box>
                    Post Blog
                </Box>
            </Box>



            <Container maxWidth="lg" className="classes.blogsContainer">
                <Grid container justify="center" spacing={3}>
                    <Grid item xs={12} sm={6} md={6}>

                        <div className="Card">

                            {textList.map(item => {
                                return (

                                    <Card className={classes.card} key={item.id}>
                                        <CardHeader
                                            subheader={item.created_at}
                                        />
                                        <CardMedia className={classes.media}
                                            image="https://i.pinimg.com/originals/ba/87/72/ba87729c4a85de62b3bc7a8ba6ade556.jpg" />
                                        <CardContent>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                {item.title}
                                                <Button
                                                    className={classes.button2}
                                                    onClick={() => goToPost(item.id)}
                                                    variant="contained"
                                                    color="secondary">
                                                    GO TO POST
                                                </Button>
                                            </Typography>
                                        </CardContent>


                                        <Collapse timeout="auto" unmountOnExit>
                                            <CardContent>
                                                <Typography paragraph>
                                                    {item.content}
                                                </Typography>
                                            </CardContent>

                                            <div className={classes.root2}>
                                                <Grid
                                                >
                                                    <Paper className={classes.paper}>
                                                        <Typography>List of users who have liked before:  </Typography>
                                                        <Divider />

                                                        <Typography>
                                                            <ul>
                                                                {'list.name'}
                                                            </ul>
                                                        </Typography>

                                                        <Typography>List of users who have read before: </Typography>
                                                        <Divider />

                                                        <Typography>
                                                            <ul>
                                                                {'read.name'}
                                                            </ul>
                                                        </Typography>
                                                    </Paper>
                                                </Grid>
                                            </div>
                                        </Collapse>
                                    </Card>
                                )
                            })}
                        </div>

                    </Grid>
                </Grid>
            </Container>

            <div className="Card"><AddPost handlePost={handlePost} /></div>

        </div >
    );
}
export default PostList;