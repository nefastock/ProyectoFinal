import {
    POST_DELETE_START,
    POST_DELETE_SUCCESS,
    POST_DELETE_ERROR,
} from './const';

import { deleteService } from '../../../services/POST.services';

import { getAllActionsAsyncCreator as getAll } from './get-all.actions';


const startActionCreator = () => ({
    type: POST_DELETE_START,
    payload: null,
})

const successActionCreator = (data) => ({
    type: POST_DELETE_SUCCESS,
    payload: data,
})

const errorActionCreator = (errorMessage) => ({
    type: POST_DELETE_ERROR,
    payload: errorMessage,
})

export const deleteActionsAsyncCreator = (id) => {
    return (dispatch, getStore) => {
        dispatch(startActionCreator());
        const jwt = getStore().auth.login.data;
        deleteService(jwt, id).then(data => {
            dispatch(successActionCreator(data.data));
            dispatch(getAll());
        }).catch(err => {
            dispatch(errorActionCreator(err));
        })
    }
}