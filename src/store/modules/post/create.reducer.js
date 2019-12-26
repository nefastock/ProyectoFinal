import {
    POST_CREATE_START,
    POST_CREATE_SUCCESS,
    POST_CREATE_ERROR,
} from './const';

const initialState = {
    data: null,
    error: null,
    success: null,
    errorMessage: '',
    loading: false,
};

const createReducer = (prevState = initialState, action) => {
    switch (action.type) {
        case POST_CREATE_START:
            return {
                ...prevState,
                loading: true,
            };

        case POST_CREATE_SUCCESS:
            return {
                ...prevState,
                data: action.payload,
                loading: false,
                error: false,
                success: true,
            };

        case POST_CREATE_ERROR:
            return {
                ...prevState,
                loading: false,
                error: true,
                success: false,
                errorMessage: action.payload,
            };

        default:
            return prevState;
    }
}

export default createReducer;