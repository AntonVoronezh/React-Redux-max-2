import { combineReducers } from 'redux';

import { menuRreducer, loginRreducer, newsRreducer, profileRreducer } from './reducers';

const rootReducer = combineReducers({
	menu: menuRreducer,
	login: loginRreducer,
	news: newsRreducer,
	profile: profileRreducer,
});

export default rootReducer;
