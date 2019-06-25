const CHANGE_USERNAME_TEXT = 'CHANGE_USERNAME_TEXT';
const changeUsernameTextAC = text => ({
	type: CHANGE_USERNAME_TEXT,
	text,
});

const CHANGE_PASSWORD_TEXT = 'CHANGE_PASSWORD_TEXT';
const changePasswordTextAC = text => ({
	type: CHANGE_PASSWORD_TEXT,
	text,
});

export { changeUsernameTextAC, CHANGE_USERNAME_TEXT, changePasswordTextAC, CHANGE_PASSWORD_TEXT };

const FETCH_LOGIN_REQUEST = 'FETCH_LOGIN_REQUEST';
const fetchLoginRequestAC = () => ({
	type: FETCH_LOGIN_REQUEST,
});

const FETCH_LOGIN_SUCCESS = 'FETCH_LOGIN_SUCCESS';
const fetchLoginSuccessAC = data => ({
	type: FETCH_LOGIN_SUCCESS,
	data,
});

const FETCH_LOGIN_FAILURE = 'FETCH_LOGIN_FAILURE';
const fetchLoginFailureAC = errorMsg => ({
	type: FETCH_LOGIN_FAILURE,
	errorMsg,
});

const fetchLogin = service => () => (dispatch, getState) => {
	const {
		login: { userNameText, passwordText },
	} = getState();

	dispatch(fetchLoginRequestAC());
	service
		.tryLogin(userNameText, passwordText)
		.then(data => {
			const { status, message } = data;
			if (status === 'ok') {
				localStorage.setItem('token', true);
				dispatch(fetchLoginSuccessAC());
			} else if (status === 'err') {
				dispatch(fetchLoginFailureAC(message));
			}
		})

		.catch(err => dispatch(fetchLoginFailureAC(err.message)));
};

export { FETCH_LOGIN_REQUEST, FETCH_LOGIN_SUCCESS, FETCH_LOGIN_FAILURE, fetchLogin };

const autoLogin = () => dispatch => {
	const token = localStorage.getItem('token');
	if (token) {
		dispatch(fetchLoginSuccessAC());
	}
};

const LOGOUT = 'LOGOUT';
const logoutAC = () => ({
	type: LOGOUT,
});
const logout = () => dispatch => {
	localStorage.removeItem('token');
	dispatch(logoutAC());
};

export { autoLogin, LOGOUT, logout };
