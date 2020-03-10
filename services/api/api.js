import axios from 'axios';

const METHOD_GET = 'get';
const METHOD_POST = 'post';
const METHOD_PUT = 'put';
const METHOD_DELETE = 'delete';
const BASE_URL = 'https://simple-blog-api.crew.red';

class API {
	get(url) {
		return this.makeRequest(`${BASE_URL + url}`, METHOD_GET);
	}

	post(url, body) {
		return this.makeRequest(`${BASE_URL + url}`, METHOD_POST, body);
	}

	put(url, body) {
		return this.makeRequest(`${BASE_URL + url}`, METHOD_PUT, body);
	}

	delete(url) {
		return this.makeRequest(`${BASE_URL + url}`, METHOD_DELETE);
	}

	makeRequest(url, method, body) {
		const requestParams = {
			method: method || METHOD_GET,
			data: body,
		};
		if (method === METHOD_POST || method === METHOD_PUT) {
			requestParams.headers['Content-Type'] = 'application/json';
		}
		return this.sendRequest(url, requestParams);
	}

	sendRequest(url, requestParams) {
		return axios(url, requestParams).then(result => result.data);
	}
}

export default new API();
