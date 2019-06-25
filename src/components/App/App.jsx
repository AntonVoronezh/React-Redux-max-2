import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container } from 'semantic-ui-react';
import { Route, Switch } from 'react-router-dom';

import './App.scss';
import { IndexPage } from '../pages';
import { LoginPage, ProfilePage, LogoutPage, NewsPage } from '../../containers/pages';
import { TopMenu } from '../../containers/elements';
import { autoLogin } from '../../store/actions';

class App extends Component {
	componentDidMount() {
		this.props.autoLogin();
	}
	render() {
		return (
			<Container className="top">
				<TopMenu />
				<Switch>
					<Route path="/" exact render={() => <IndexPage />} />
					<Route path="/news" render={() => <NewsPage />} />
					<Route path="/profile" render={() => <ProfilePage />} />
					<Route path="/login" render={() => <LoginPage />} />
					<Route path="/logout" render={() => <LogoutPage />} />
					<Route render={() => <h2>Page not found</h2>} />
				</Switch>
			</Container>
		);
	}
}

const mapDispatchToProps = {
	autoLogin,
};

export default connect(
	null,
	mapDispatchToProps
)(App);
