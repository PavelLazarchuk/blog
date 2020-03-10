import { GET_POST_LIST, GET_ONE_POST, ADD_NEW_POST, ERROR } from './actionNames';

const initialState = {
	post: null,
	postList: [],
	error: null,
	isError: false,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case GET_POST_LIST:
			return {
				...state,
				isError: false,
				postList: action.payload,
			};

		case GET_ONE_POST:
			return {
				...state,
				isError: false,
				post: action.payload,
			};

		case ADD_NEW_POST:
			return {
				...state,
				isError: false,
				postList: [...state.postList, action.payload],
			};

		case ERROR:
			return {
				...state,
				isError: true,
				error: action.payload,
			};

		default:
			return state;
	}
};
