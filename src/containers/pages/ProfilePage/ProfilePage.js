import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { ProfilePage } from '../../../components/pages';
import { fetchProfile } from '../../../store/actions';
import { withAuthService } from '../../../hoc';

class ProfilePageContainer extends Component {
	componentDidUpdate(prevProps) {
		const { id, fetchProfile } = this.props;
		if (prevProps.id !== id) {
			fetchProfile(id);
		}
	}

	render() {
		const { isLoggedIn, ...rest } = this.props;

		if (!isLoggedIn) {
			return <Redirect to="/login" />;
		}

		return <ProfilePage {...rest} />;
	}
}

const mapStateToProps = ({ login: { isLoggedIn }, profile: { id } }) => {
	return {
		isLoggedIn,
		id,
	};
};

const mapDispatchToProps = (dispatch, { authService }) => {
	return bindActionCreators(
		{
			fetchProfile: fetchProfile(authService),
		},
		dispatch
	);
};

export default withAuthService()(
	connect(
		mapStateToProps,
		mapDispatchToProps
	)(ProfilePageContainer)
);
