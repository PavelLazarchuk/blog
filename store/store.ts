import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';

import postReducer from './post/reducer';

const rootReducer = combineReducers({
	post: postReducer,
});

const store = createStore(rootReducer, undefined, compose(applyMiddleware(thunk)));

export default store;
