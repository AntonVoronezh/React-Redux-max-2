import axios from 'axios';

export default class AuthService {
	_axiosInstance = axios.create({
		baseURL: 'https://mysterious-reef-29460.herokuapp.com/api/v1/',
		// withCredentials: true,
		headers: {
			'content-type': ' application/json',
		},
	});


	_getResourse =  async (response, url) => {
		if (!response.status === 200) {
			throw new Error(`Could not fetch ${url}, resived ${response.status}`);
		}
		
		const body = await response.data;
		return body;
	};

	tryLogin = async (email, password) => {
		const endPoint = `validate`;
		const data = JSON.stringify({
			email,
			password,
		});
		const response = await this._axiosInstance.post(endPoint, data);

		return this._getResourse(response, endPoint);
	};

}
