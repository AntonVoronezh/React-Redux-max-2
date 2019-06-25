import { ADD_PROFILE_ID } from '../actions';
import { FETCH_PROFILE_REQUEST, FETCH_PROFILE_SUCCESS, FETCH_PROFILE_FAILURE } from '../actions';

import { statuses } from '../../helpers';

const initialState = {
	id: null,
	status: statuses.INIT,
	profile: null,
	errorMsg: null,
};

const profileRreducer = (state = initialState, action) => {
	const { type, id, profile, errorMsg } = action;

	switch (type) {
		case ADD_PROFILE_ID: {
			return {
				...state,
				id,
			};
		}
		case FETCH_PROFILE_REQUEST: {
			return {
				status: statuses.REQUEST,
				errorMsg: null,
			};
		}
		case FETCH_PROFILE_SUCCESS: {
			debugger
			return {
				...state,
				status: statuses.SUCCESS,
				profile,
				errorMsg: null,
			};
		}
		case FETCH_PROFILE_FAILURE: {
			return {
				...state,
				status: statuses.FAILURE,
				errorMsg,
			};
		}
		default:
			return state;
	}
};

export default profileRreducer;
