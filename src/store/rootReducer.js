import { combineReducers } from 'redux';

import { menuRreducer, loginRreducer, newsRreducer } from './reducers';

const rootReducer = combineReducers({
	menu: menuRreducer,
	login: loginRreducer,
	news: newsRreducer,
});

export default rootReducer;
