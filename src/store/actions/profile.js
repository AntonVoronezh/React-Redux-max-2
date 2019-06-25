const ADD_PROFILE_ID = 'ADD_PROFILE_ID';

const addProfileIdAC = id => ({
	type: ADD_PROFILE_ID,
	id,
});

export { addProfileIdAC, ADD_PROFILE_ID };

const FETCH_PROFILE_REQUEST = 'FETCH_PROFILE_REQUEST';
const fetchProfileRequestAC = () => ({
	type: FETCH_PROFILE_REQUEST,
});

const FETCH_PROFILE_SUCCESS = 'FETCH_PROFILE_SUCCESS';
const fetchProfileSuccessAC = profile => ({
	type: FETCH_PROFILE_SUCCESS,
	profile,
});

const FETCH_PROFILE_FAILURE = 'FETCH_PROFILE_FAILURE';
const fetchProfileFailureAC = errorMsg => ({
	type: FETCH_PROFILE_FAILURE,
	errorMsg,
});

const fetchProfile = service => () => async (dispatch, getState) => {
	const {
		profile: { id },
	} = getState();

	dispatch(fetchProfileRequestAC());

	try {
		const response = await service.getUser(id);
		const {
			status,
			message,
			data,
		} = response;

		if (status === 'ok') {
			dispatch(fetchProfileSuccessAC(data));
		} else if (status === 'err') {
			dispatch(fetchProfileFailureAC(message));
		}
	} catch (err) {
		dispatch(fetchProfileFailureAC(err.message));
	}
};

export { FETCH_PROFILE_REQUEST, FETCH_PROFILE_SUCCESS, FETCH_PROFILE_FAILURE, fetchProfile };
