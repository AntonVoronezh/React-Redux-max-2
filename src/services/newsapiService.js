// import axios from 'axios'

// const url = 'https://newsapi.org/v2/'
// const apiKey = '7fd45e35dc9349c8ad721a77101089d6'

// export default () => {
//    return axios.get(`${url}top-headlines?sources=bbc-news&apiKey=${apiKey}`)
// }

export default class NewsapiServises {
	_baseUrl = 'https://newsapi.org/v2/';
	_apiKey = '7fd45e35dc9349c8ad721a77101089d6';

	getResourse = async () => {
		const response = await fetch(`${this._baseUrl}top-headlines?sources=bbc-news&apiKey=${this._apiKey}`);

		if (!response.ok) {
			throw new Error(`Could not fetch ${this._baseUr}, resived ${response.status}`);
		}
		const body = await response.json();
		return body;
	};
}
