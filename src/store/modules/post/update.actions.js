import {
    POST_UPDATE_START,
    POST_UPDATE_SUCCESS,
    POST_UPDATE_ERROR,
} from './const';

import { updateService } from '../../../services/POST.services';

const startActionCreator = () => ({
    type: POST_UPDATE_START,
    payload: null,
})

const successActionCreator = (data) => ({
    type: POST_UPDATE_SUCCESS,
    payload: data,
})

const errorActionCreator = (errorMessage) => ({
    type: POST_UPDATE_ERROR,
    payload: errorMessage,
})

export const updateActionsAsyncCreator = (data, id) => {
    return (dispatch, getStore) => {
        dispatch(startActionCreator());
        const jwt = getStore().auth.login.data;
        updateService(jwt, data, id).then(data => {
            dispatch(successActionCreator(data.data));
        }).catch(err => {
            dispatch(errorActionCreator(err));
        })
    }
}