import axios from 'axios';

const METHOD_GET = 'get';
const METHOD_POST = 'post';
const METHOD_PUT = 'put';
const METHOD_DELETE = 'delete';
const BASE_URL = 'https://simple-blog-api.crew.red';

class API {
	get(url: string, body?: object, headers?: object) {
		return this.makeRequest(`${BASE_URL + url}`, METHOD_GET, body, headers);
	}

	post(url: string, body: object, headers?: object) {
		return this.makeRequest(`${BASE_URL + url}`, METHOD_POST, body, headers);
	}

	put(url: string, body: object, headers?: object) {
		return this.makeRequest(`${BASE_URL + url}`, METHOD_PUT, body, headers);
	}

	delete(url: string, body?: object, headers?: object) {
		return this.makeRequest(`${BASE_URL + url}`, METHOD_DELETE, body, headers);
	}

	makeRequest(url: string, method: string, body: object, headers: object) {
		const requestParams = {
			method: method || METHOD_GET,
			data: body,
			headers: headers ? headers : {},
		};
		if (method === METHOD_POST || method === METHOD_PUT) {
			requestParams.headers['Content-Type'] = 'application/json';
		}
		return this.sendRequest(url, requestParams);
	}

	sendRequest(url: string, requestParams: object) {
		return axios(url, requestParams).then(result => result.data);
	}
}

export default new API();
