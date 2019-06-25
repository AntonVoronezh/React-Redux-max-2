import { ADD_PROFILE_ID } from '../actions';

const initialState = {
	id: null,
};

const profileRreducer = (state = initialState, action) => {
	
	const { type, id } = action;
	switch (type) {
		case ADD_PROFILE_ID: {
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
