const INITIAL_STATE = {
    textList: [],
    errorTextList: '',
    postDetail: {
        id: '',
        title: '',
        content: '',
        created_at: '',
        comments: []
    },
    errorPostDetail: '',
    errorAddComment: '',
    errorDeletePost: '',
    errorEditPost: '',
    errorAddPost: '',

};

export const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'GET_TEXT_LIST':
            return { ...state, textList: action.payload, errorTextList: '' }
        case 'ERROR_GET_TEXT_LIST':
            return { ...state, errorTextList: action.payload }
        case 'GET_POST':
            return { ...state, postDetail: action.payload, errorPostDetail: '' }
        case 'ERROR_GET_POST':
            return { ...state, errorPostDetail: action.payload }
        case 'ADD_COMMENT':
            return {
                ...state, postDetail:
                {
                    ...state.postDetail, comments: [...state.postDetail.comments, action.payload]
                }, errorAddComment: ''
            };
        case 'ERROR_ADD_COMMENT':
            return { ...state, errorAddComment: action.payload }
        case 'DELETE_POST':
            return {
                ...state,
                textList: state.textList.filter(post => post.id !== action.payload),
                errorDeletePost: ''
            }
        case 'ERROR_DELETE_POST':
            return { ...state, errorDeletePost: action.payload, errorDeletePost: '' }
        case 'EDIT_POST':
            return {
                ...state, postDetail: { ...state.postDetail, ...action.payload },
                errorEditPost: ''
            }
        case 'ERROR_EDIT_POST':
            return {
                ...state,
                errorEditPost: action.payload
            }
        case 'ADD_POST':
            return {
                ...state, textList:
                [
                    ...state.textList, action.payload
                ], errorAddPost: ''
            }
        case 'ERROR_ADD_POST':
            return { ...state, errorAddPost: action.payload }
        default:
            return state;
    }
};