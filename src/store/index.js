import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import modulesReducer from './modules';

const store = createStore(modulesReducer, applyMiddleware(logger, thunk));
export default store;