import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';

import postReducer from './post/reducer';

const rootReducer = combineReducers({
	post: postReducer,
});

// const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, undefined, compose(applyMiddleware(thunk)));

export default store;
