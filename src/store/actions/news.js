const FETCH_NEWS_REQUEST = 'FETCH_NEWS_REQUEST';
const fetchNewsRequestAC = () => ({
	type: FETCH_NEWS_REQUEST,
});

const FETCH_NEWS_SUCCESS = 'FETCH_NEWS_SUCCESS';
const fetchNewsSuccessAC = news => ({
	type: FETCH_NEWS_SUCCESS,
	news,
});

const FETCH_NEWS_FAILURE = 'FETCH_NEWS_FAILURE';
const fetchNewsFailureAC = errorMsg => ({
	type: FETCH_NEWS_FAILURE,
	errorMsg,
});

const fetchNews = service => () => dispatch => {
	dispatch(fetchNewsRequestAC());
	service
		.getResourse()
		.then(data => {
			const { status, articles } = data;

			if (status === 'ok') {
				dispatch(fetchNewsSuccessAC(articles));
			} else if (status === 'err') {
				dispatch(fetchNewsFailureAC('Данные не получены'));
			}
			console.log('fetchNews', articles);
		})

		.catch(err => dispatch(fetchNewsFailureAC(err.message)));
};

export { fetchNews, FETCH_NEWS_REQUEST, FETCH_NEWS_SUCCESS, FETCH_NEWS_FAILURE };
