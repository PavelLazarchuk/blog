import API from '../../services/api';
import errorAxios from '../../utils/actions/errorAxios';
import { GET_POST_LIST, GET_ONE_POST, ADD_NEW_POST } from './actionNames';

const successAxiosList = payload => {
	return {
		type: GET_POST_LIST,
		payload,
	};
};

const successAxiosOne = payload => {
	return {
		type: GET_ONE_POST,
		payload,
	};
};

const addOnePost = payload => {
	return {
		type: ADD_NEW_POST,
		payload,
	};
};

export const addPost = body => {
	return dispatch => {
		API.post('/posts', body)
			.then(data => {
				console.log(data);
				// dispatch(addOnePost(data.result));
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
				console.log(data);
				// dispatch(successAxiosOne(data.result));
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
				console.log(data);
				// dispatch(successAxiosList(data.result));
			})
			.catch(error => {
				dispatch(errorAxios(error));
			});
	};
};
