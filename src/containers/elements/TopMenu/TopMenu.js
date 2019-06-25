import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { TopMenu } from '../../../components/elements';
import { changeActivePageAC } from '../../../store/actions';

const menuListNotAuth = [
	{ id: 1, to: '/', content: 'На главную' },
	{ id: 2, to: '/news', content: 'Новости' },
	{ id: 3, to: '/profile', content: 'Профайл' },
	{ id: 4, to: '/login', content: 'Логин' },
];
const menuListAuth = [
	{ id: 1, to: '/', content: 'На главную' },
	{ id: 2, to: '/news', content: 'Новости' },
	{ id: 3, to: '/profile', content: 'Профайл' },
	{ id: 4, to: '/logout', content: 'Выход' },
];

class TopMenuContainer extends Component {
	render() {
		const { isLoggedIn, ...rest } = this.props;
		const menuList = isLoggedIn ? menuListAuth : menuListNotAuth;

		return <TopMenu {...rest} menuList={menuList} />;
	}
}

const mapStateToProps = ({ menu: { activePage }, login: { isLoggedIn } }) => {
	return {
		activePage,
		isLoggedIn,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onChange: page => dispatch(changeActivePageAC(page)),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withRouter(TopMenuContainer));
