import { CHANGE_USERNAME_TEXT, CHANGE_PASSWORD_TEXT } from '../actions';
import { statuses } from '../../helpers';
import { FETCH_LOGIN_REQUEST, FETCH_LOGIN_SUCCESS, FETCH_LOGIN_FAILURE, LOGOUT } from '../actions';

const initialState = {
	userNameText: '',
	passwordText: '',
	status: statuses.INIT,
	isLoggedIn: false,
	errorMsg: null,
};

const updateText = (oldText, payload) => {
	if (payload === null) {
		return oldText(0, oldText.length - 1);
	}
	return oldText + payload;
};

const loginRreducer = (state = initialState, action) => {
	const { type, text, errorMsg } = action;
	const { userNameText, passwordText } = state;

	switch (type) {
		case CHANGE_USERNAME_TEXT: {
			return {
				...state,
				userNameText: updateText(userNameText, text),
			};
		}
		case CHANGE_PASSWORD_TEXT: {
			return {
				...state,
				passwordText: updateText(passwordText, text),
			};
		}
		case FETCH_LOGIN_REQUEST: {
			return {
				...state,
				status: statuses.REQUEST,
				errorMsg: null,
			};
		}
		case FETCH_LOGIN_SUCCESS: {
			return {
				...state,
				status: statuses.SUCCESS,
				userNameText: '',
				passwordText: '',
				isLoggedIn: true,
				errorMsg: null,
			};
		}
		case FETCH_LOGIN_FAILURE: {
			return {
				...state,
				status: statuses.FAILURE,
				errorMsg,
				userNameText: '',
				passwordText: '',
			};
		}
		case LOGOUT: {
			return {
				...state,
				status: statuses.INIT,
				isLoggedIn: false,
			};
		}
		default:
			return state;
	}
};

export default loginRreducer;
