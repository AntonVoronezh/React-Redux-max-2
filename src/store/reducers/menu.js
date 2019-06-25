import { CHANGE_ACTIVE_PAGE } from '../actions';

const initialState = {
	activePage: '/',
};

const menuRreducer = (state = initialState, action) => {
	switch (action.type) {
		case CHANGE_ACTIVE_PAGE: {
			return {
				...state,
				activePage: action.page,
			};
		}
		default:
			return state;
	}
};

export default menuRreducer;
