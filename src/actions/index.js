import axios from "axios";
import { Api } from "../components/Api";


export const getTextList = () => dispatch => {
    Api()
        .get('/posts')
        .then(res => {
            dispatch({ type: 'GET_TEXT_LIST', payload: res.data });
        })
        .catch(error => {
            dispatch({ type: 'ERROR_GET_TEXT_LIST', payload: 'AN ERROR OCCURED WHEN UPLOAD DATA' });
        });

}

export const getPost = (id) => dispatch => {
    axios.all([
        Api().get(`/posts/${id}`),
        Api().get(`/posts/${id}/comments`)
    ]).then(res => {
        const payload = {
            ...res[0].data,
            comments: res[1].data
        }
        dispatch({ type: 'GET_POST', payload: payload })
    }).catch(err => {
        dispatch({ type: 'ERROR_GET_POST', payload: 'AN ERROR OCCURED WHEN UPLOAD DATA' })
    });
}

export const addComment = (id, commentBody) => dispatch => {
    Api()
        .post(`/posts/${id}/comments`, commentBody)
        .then(res => {
            dispatch({ type: 'ADD_COMMENT', payload: res.data })
        })
        .catch(err => {
            dispatch({ type: 'ERROR_ADD_COMMENT', payload: 'AN ERROR OCCURED WHEN ADD COMMENT' })
        })
}

export const deletePost = (id, goToPostList) => dispatch => {
    Api()
        .delete(`/posts/${id}`)
        .then(() => {
            dispatch({ type: 'DELETE_POST', payload: id })
            goToPostList();
        })
        .catch(() => {
            dispatch({ type: 'ERROR_DELETE_POST', payload: 'AN ERROR OCCURED WHEN DELETE POST' });
        });
};

export const editPost = (id, text, goToPost) => dispatch => {
    console.log({ text });
    Api()
        .put(`/posts/${id}`, text)
        .then(res => {
            dispatch({ type: 'EDIT_POST', payload: res.data });
            goToPost();
        })
        .catch(error => {
            dispatch({ type: 'ERROR_EDIT_POST', payload: 'AN ERROR OCCURED WHEN EDIT POST' });
        });
};

export const addPost = (text, goToPostList) => dispatch => {
    Api()
    .post(`/posts`, text)
    .then(res => {
        dispatch({ type: 'ADD_POST', payload: res.data })
        goToPostList();
    })
    .catch(error => {
        dispatch({ type: 'ERROR_ADD_POST', payload: 'AN ERROR OCCURED WHEN ADD POST' })
    })
}