import { combineReducers } from 'redux';
import user from './user';
import auth from './auth';
import post from './post';

const modulesReducer = combineReducers({
    user,
    auth,
    post
});

export default modulesReducer;