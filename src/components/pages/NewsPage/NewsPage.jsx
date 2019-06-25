import React, { Fragment } from 'react';

import './NewsPage.scss';
import OneNews from './OneNews';

const NewsPage = ({ news: newsArr, errorMsg }) => {
	const error = errorMsg ? <div>{errorMsg}</div> : null;
	const news = newsArr.map((n, idx) => {
		return <OneNews key={idx} {...n} />;
	});

	return (
		<Fragment>
			{error}
			{news}
		</Fragment>
	);
};

export default NewsPage;
