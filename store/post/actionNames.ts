export const GET_POST_LIST: string = 'GET_POST_LIST';
export const GET_ONE_POST: string = 'GET_ONE_POST';
export const ADD_NEW_POST: string = 'ADD_NEW_POST';
export const ERROR: string = 'ERROR';

export interface Response {
	id: number;
	body: string;
	title: string;
}

export interface NewPostTypes {
	body: string;
	title: string;
}
