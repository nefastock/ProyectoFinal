import {
    POST_GET_START,
    POST_GET_SUCCESS,
    POST_GET_ERROR,
} from './const';

const initialState = {
    data: null,
    error: null,
    success: null,
    errorMessage: '',
    loading: false,
};

const getReducer = (prevState = initialState, action) => {
    switch (action.type) {
        case POST_GET_START:
            return {
                ...prevState,
                loading: true,
            };

        case POST_GET_SUCCESS:
            return {
                ...prevState,
                data: action.payload,
                loading: false,
                error: false,
                success: true,
            };

        case POST_GET_ERROR:
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

export default getReducer;