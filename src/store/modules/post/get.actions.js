import {
    POST_GET_START,
    POST_GET_SUCCESS,
    POST_GET_ERROR,
} from './const';

import { findPostById } from '../../../services/post.services';

const startActionCreator = () => ({
    type: POST_GET_START,
    payload: null,
})

const successActionCreator = (data) => ({
    type: POST_GET_SUCCESS,
    payload: data,
})

const errorActionCreator = (errorMessage) => ({
    type: POST_GET_ERROR,
    payload: errorMessage,
})

export const getActionsAsyncCreator = (id) => {
    return (dispatch, getStore) => {
        dispatch(startActionCreator());
        const jwt = getStore().auth.login.data;
        findPostById(jwt, id).then(data => {
            dispatch(successActionCreator(data.data));
        }).catch(err => {
            dispatch(errorActionCreator(err));
        })
    }
}