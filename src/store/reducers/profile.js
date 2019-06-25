import { ADD_PROFILE_ID } from '../actions';

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
			debugger
			return {
				...state,
				id,
			};
		}
		default:
			return state;
	}
};

export default profileRreducer;
