import {
    POST_GET_ALL_START,
    POST_GET_ALL_SUCCESS,
    POST_GET_ALL_ERROR,
} from './const';

import { findAllPost } from '../../../services/post.services';

const startActionCreator = () => ({
    type: POST_GET_ALL_START,
    payload: [],
})

const successActionCreator = (data) => ({
    type: POST_GET_ALL_SUCCESS,
    payload: data,
})

const errorActionCreator = (errorMessage) => ({
    type: POST_GET_ALL_ERROR,
    payload: errorMessage,
})

export const getAllActionsAsyncCreator = () => {    
    return (dispatch, getStore) => {
        dispatch(startActionCreator());
        const jwt = getStore().auth.login.data;
        findAllPost(jwt).then(data => {
            dispatch(successActionCreator(data.data));
        }).catch(err => {
            debugger
            dispatch(errorActionCreator(err));
        })
    }
}