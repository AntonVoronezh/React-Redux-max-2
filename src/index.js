import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import 'semantic-ui-css/semantic.min.css';
import store from './store/store';
import App from './components/App';
import { ErrorBoundry } from './components/errors';
import { AuthServiceProvider, NewsapiServiceProvider } from './helpers';
import { AuthService, NewsapiServises} from './services';

const storeService = store();
const authService = new AuthService();
const newsapiService = new NewsapiServises();

ReactDOM.render(
	<Provider store={storeService}>
		<ErrorBoundry>
			<BrowserRouter>
				<AuthServiceProvider value={authService}>
					<NewsapiServiceProvider value={newsapiService}>
						<App />
					</NewsapiServiceProvider>
				</AuthServiceProvider>
			</BrowserRouter>
		</ErrorBoundry>
	</Provider>,
	document.getElementById('root')
);
