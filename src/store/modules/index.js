import { combineReducers } from 'redux';
import user from './user';
import auth from './auth';

const modulesReducer = combineReducers({
    user,
    auth,
});

export default modulesReducer;