import React from 'react';

import { NewsapiServiceConsumer } from '../helpers';

const withNewsapiService = () => Wrapped => {
	return props => {
		return (
			<NewsapiServiceConsumer>
				{NewsapiService => {
					return <Wrapped {...props} newsapiService={NewsapiService} />;
				}}
			</NewsapiServiceConsumer>
		);
	};
};

export default withNewsapiService;
