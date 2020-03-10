import {
	GET_POST_LIST,
	GET_ONE_POST,
	ADD_NEW_POST,
	ERROR,
	Response,
	NewPostTypes,
} from './actionNames';

type Action<K, V = void> = V extends void ? { type: K } : { type: K } & V;

export type ActionType =
  | Action<'GET_POST_LIST', { payload: Array<Response> }>
	| Action<'GET_ONE_POST', { payload: Response }>
	| Action<'ADD_NEW_POST', { payload: NewPostTypes }>
	| Action<'ERROR', { payload: string }>

interface StateTypes {
	post: null | NewPostTypes;
	postList: Array<Response>;
	error: string;
	isError: boolean;
}

const initialState: StateTypes = {
	post: null,
	postList: [],
	error: '',
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
