import React, { useState } from 'react'
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Chip from '@material-ui/core/Chip';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const CommentList = (props) => {

    // const [commentList, setCommentList] = useState([]);
    // setCommentList(props.comments);
    // console.log(commentList);

    const Accordion = withStyles({
        root: {
            border: '1px solid rgba(0, 0, 0, .125)',
            boxShadow: 'none',
            '&:not(:last-child)': {
                borderBottom: 0,
            },
            '&:before': {
                display: 'none',
            },
            '&$expanded': {
                margin: 'auto',
            },
        },
        expanded: {},
    })(MuiAccordion);

    const AccordionSummary = withStyles({
        root: {
            backgroundColor: 'rgba(0, 0, 0, .03)',
            borderBottom: '1px solid rgba(0, 0, 0, .125)',
            marginBottom: -1,
            minHeight: 56,
            '&$expanded': {
                minHeight: 56,
            },
        },
        content: {
            '&$expanded': {
                margin: '12px 0',
            },
        },
        expanded: {},
    })(MuiAccordionSummary);

    const AccordionDetails = withStyles((theme) => ({
        root: {
            padding: theme.spacing(2),
        },
    }))(MuiAccordionDetails);

    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    }

    // const goToEdit = (commentID, postID) => {
    //     //history.push(`/posts/`${postID}`/comments/`${commentID}``);
    //     console.log('CommentID: ', commentID, + 'PostID: ', postID);
    // }

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
        chip: {
            marginBottom: '20px',
        },
        comments: {
            marginLeft: 0,
        },
        date: {
            marginLeft: '1450px',
            marginTop: '23px',
        },
        editButton: {
            marginLeft: '1635px',
        },
        dropDown: {
            paddingRight: '5px',
        },
        content: {
            marginTop: '5px',
        }

    });

    const classes = useStyles();
    return (
        <div>

            <Chip className={classes.chip} color="primary" label="COMMENTS" color="primary" />

            {props.comments.map(comment => {
                return (
                    <Accordion
                        className={classes.comments}
                        key={comment.id}
                        square expanded={expanded === 'panel1'}
                        onChange={handleChange('panel1')}>
                        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                            <Typography>
                                <ArrowDropDownIcon className={classes.dropDown}></ArrowDropDownIcon>
                                <b>{comment.display_name}</b>
                                {/* <Button
                                    className={classes.editButton}
                                    variant="contained"
                                    color="default"
                                    onClick={
                                        console.log(comment.id, comment.post_id),
                                        () => goToEdit(comment.id, comment.post_id)
                                    }>
                                    EDIT
                                </Button> */}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography className={classes.content}>
                                {comment.body}
                            </Typography>
                            <Typography className={classes.date}>
                                {'DATE: ' + comment.created_at}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                )
            })}

        </div>
    )
}

export default CommentList;