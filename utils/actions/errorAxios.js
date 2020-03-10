import { ERROR } from '../../store/post/actionNames';

export default errorAxios = payload => {
	return {
		type: ERROR,
		payload,
	};
};
