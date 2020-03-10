import API from '../../services/api';
import {
	GET_POST_LIST,
	GET_ONE_POST,
	ADD_NEW_POST,
	ERROR,
	Response,
	NewPostTypes,
} from './actionNames';
import { interLiteralFromString } from '../../utils/interLiteralFromString';

const successAxiosList = (payload: Array<Response>) => {
	return {
		type: interLiteralFromString(GET_POST_LIST),
		payload,
	};
};

const successAxiosOne = (payload: Object) => {
	return {
		type: interLiteralFromString(GET_ONE_POST),
		payload,
	};
};

const addOnePost = (payload: NewPostTypes) => {
	return {
		type: interLiteralFromString(ADD_NEW_POST),
		payload,
	};
};

const errorAxios = (payload: String) => {
	return {
		type: interLiteralFromString(ERROR),
		payload,
	};
};

export const addPost = body => {
	return dispatch => {
		API.post('/posts', body)
			.then(data => {
				console.log(data);
				dispatch(addOnePost(data));
			})
			.catch(error => {
				dispatch(errorAxios(error));
			});
	};
};

export const getOnePost = id => {
	return dispatch => {
		API.get(`/posts/${id}?_embed=comments`)
			.then(data => {
				dispatch(successAxiosOne(data));
			})
			.catch(error => {
				dispatch(errorAxios(error));
			});
	};
};

export const getAllPost = () => {
	return dispatch => {
		API.get('/posts')
			.then(data => {
				dispatch(successAxiosList(data));
			})
			.catch(error => {
				dispatch(errorAxios(error));
			});
	};
};
