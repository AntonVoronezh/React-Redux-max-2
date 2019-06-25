const ADD_PROFILE_ID = 'ADD_PROFILE_ID';

const addProfileIdAC = id => ({
	type: ADD_PROFILE_ID,
	id,
});

export { addProfileIdAC, ADD_PROFILE_ID };

const FETCH_PROFILE_REQUEST = 'FETCH_PROFILE_REQUEST';
const fetchProfileequestAC = () => ({
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

export { FETCH_PROFILE_REQUEST, FETCH_PROFILE_SUCCESS, FETCH_PROFILE_FAILURE };
