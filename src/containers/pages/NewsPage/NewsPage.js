import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { NewsPage } from '../../../components/pages';
import { fetchNews } from '../../../store/actions';
import { Spinner } from '../../../components/elements';
import { withNewsapiService } from '../../../hoc';
import { statuses } from '../../../helpers';

class NewsPageContainer extends Component {
	componentDidMount() {
		const { news, getNews } = this.props;

		if (news.length === 0) {
			getNews();
		}
	}

	render() {
		const { status, news, errorMsg } = this.props;
		if (status === statuses.REQUEST) {
		// if (news.length === 0) {
			return <Spinner />;
		}

        return <NewsPage news={news} errorMsg={errorMsg}/>;
	}
}

const mapStateToProps = ({ news }) => {
	return {
		...news,
	};
};

const mapDispatchToProps = (dispatch, { newsapiService }) => {
	return bindActionCreators(
		{
			getNews: fetchNews(newsapiService),
		},
		dispatch
	);
};

export default withNewsapiService()(
	connect(
		mapStateToProps,
		mapDispatchToProps
	)(NewsPageContainer)
);
