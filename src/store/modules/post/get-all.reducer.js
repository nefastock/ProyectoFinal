import {
    POST_GET_ALL_START,
    POST_GET_ALL_SUCCESS,
    POST_GET_ALL_ERROR,
} from './const';

const initialState = {
    data: [],
    error: null,
    success: null,
    errorMessage: '',
    loading: false,
};

const getAllReducer = (prevState = initialState, action) => {
    switch (action.type) {
        case POST_GET_ALL_START:
            return {
                ...prevState,
                data: [],
                loading: true,
            };

        case POST_GET_ALL_SUCCESS:
            return {
                ...prevState,
                data: action.payload,
                loading: false,
                error: false,
                success: true,
            };

        case POST_GET_ALL_ERROR:
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

export default getAllReducer;