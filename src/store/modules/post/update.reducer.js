import {
    POST_UPDATE_START,
    POST_UPDATE_SUCCESS,
    POST_UPDATE_ERROR,
} from './const';

const initialState = {
    data: null,
    error: null,
    success: null,
    errorMessage: '',
    loading: false,
};

const updateReducer = (prevState = initialState, action) => {
    switch (action.type) {
        case POST_UPDATE_START:
            return {
                ...prevState,
                loading: true,
            };

        case POST_UPDATE_SUCCESS:
            return {
                ...prevState,
                data: action.payload,
                loading: false,
                error: false,
                success: true,
            };

        case POST_UPDATE_ERROR:
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

export default updateReducer;