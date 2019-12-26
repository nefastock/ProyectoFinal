import {
    POST_CREATE_START,
    POST_CREATE_SUCCESS,
    POST_CREATE_ERROR,
} from './const';

import { saveService } from '../../../services/POST.services';

const startActionCreator = () => ({
    type: POST_CREATE_START,
    payload: null,
})

const successActionCreator = (data) => ({
    type: POST_CREATE_SUCCESS,
    payload: data,
})

const errorActionCreator = (errorMessage) => ({
    type: POST_CREATE_ERROR,
    payload: errorMessage,
})

export const saveActionsAsyncCreator = (data) => {
    return (dispatch, getStore) => {
        dispatch(startActionCreator());
        const jwt = getStore().auth.login.data;
        saveService(jwt, data).then(data => {
            dispatch(successActionCreator(data.data));
        }).catch(err => {
            dispatch(errorActionCreator(err));
        })
    }
}