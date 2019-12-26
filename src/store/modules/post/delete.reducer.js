import {
    POST_DELETE_START,
    POST_DELETE_SUCCESS,
    POST_DELETE_ERROR,
} from './const';

const initialState = {
    data: null,
    error: null,
    success: null,
    errorMessage: '',
    loading: false,
};

const deleteReducer = (prevState = initialState, action) => {
    switch (action.type) {
        case POST_DELETE_START:
            return {
                ...prevState,
                loading: true,
            };

        case POST_DELETE_SUCCESS:
            return {
                ...prevState,
                data: action.payload,
                loading: false,
                error: false,
                success: true,
            };

        case POST_DELETE_ERROR:
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

export default deleteReducer;