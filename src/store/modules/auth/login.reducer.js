import {
    AUTH_LOGIN_START,
    AUTH_LOGIN_SUCCESS,
    AUTH_LOGOUT,
    AUTH_LOGIN_ERROR,
} from './const';

const initialState = {
    data: localStorage.getItem('jwt') ||  null,
    error: null,
    success: null,
    errorMessage: '',
    loading: false,
    jwt: true,
};

const loginReducer = (prevState = initialState, action) => {
    switch (action.type) {
        case AUTH_LOGIN_START:
            return {
                ...prevState,
                loading: true,
            };

        case AUTH_LOGIN_SUCCESS:
            localStorage.setItem('jwt', action.payload);
            return {
                ...prevState,
                data: action.payload,
                loading: false,
                error: false,
                success: true,
                jwt: true
            };

        case AUTH_LOGIN_ERROR:
            return {
                ...prevState,
                loading: false,
                error: true,
                success: false,
                errorMessage: action.payload,
            };

        case AUTH_LOGOUT:

            debugger
            localStorage.removeItem('jwt');

            return {
                ...prevState,
                data: null,
                loading: false,
                error: false,
                success: false,
                errorMessage: '',
                jwt: false
            };

        default:
            return prevState;
    }
}

export default loginReducer;