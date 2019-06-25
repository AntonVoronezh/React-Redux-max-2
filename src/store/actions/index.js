import { changeActivePageAC, CHANGE_ACTIVE_PAGE } from './menu';

import {
	changeUsernameTextAC,
	CHANGE_USERNAME_TEXT,
	changePasswordTextAC,
	CHANGE_PASSWORD_TEXT,
	fetchLogin,
	autoLogin,
	logout,
	LOGOUT,
} from './login';

import { FETCH_LOGIN_REQUEST, FETCH_LOGIN_SUCCESS, FETCH_LOGIN_FAILURE } from './login';

import { FETCH_NEWS_REQUEST, FETCH_NEWS_SUCCESS, FETCH_NEWS_FAILURE, fetchNews } from './news';

import { addProfileIdAC, ADD_PROFILE_ID } from './profile';

import { FETCH_PROFILE_REQUEST, FETCH_PROFILE_SUCCESS, FETCH_PROFILE_FAILURE, fetchProfile } from './profile';

export {
	changeActivePageAC,
	CHANGE_ACTIVE_PAGE,
	changeUsernameTextAC,
	CHANGE_USERNAME_TEXT,
	changePasswordTextAC,
	CHANGE_PASSWORD_TEXT,
	fetchLogin,
	FETCH_LOGIN_REQUEST,
	FETCH_LOGIN_SUCCESS,
	FETCH_LOGIN_FAILURE,
	autoLogin,
	logout,
	LOGOUT,
};

export { FETCH_NEWS_REQUEST, FETCH_NEWS_SUCCESS, FETCH_NEWS_FAILURE, fetchNews };

export { addProfileIdAC, ADD_PROFILE_ID };

export { FETCH_PROFILE_REQUEST, FETCH_PROFILE_SUCCESS, FETCH_PROFILE_FAILURE, fetchProfile };
