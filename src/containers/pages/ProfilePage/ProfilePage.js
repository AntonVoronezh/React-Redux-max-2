import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { ProfilePage } from '../../../components/pages';
import { fetchProfile } from '../../../store/actions';

class ProfilePageContainer extends Component {
	render() {
		const { isLoggedIn, ...rest } = this.props;

		if (!isLoggedIn) {
			return <Redirect to="/login" />;
		}

		return <ProfilePage {...rest} />;
	}
}

const mapStateToProps = ({ login: { isLoggedIn } }) => {
	return {
		isLoggedIn,
	};
};
const mapDispatchToProps = ({ login: { isLoggedIn } }) => {
	return {
		isLoggedIn,
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ProfilePageContainer);
