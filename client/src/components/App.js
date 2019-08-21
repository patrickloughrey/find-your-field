import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Statistics from './Statistics';
import About from './About';
import Footer from './Footer';

import Register from './auth/Register';
import Login from './auth/Login';

import Dashboard from './dashboard/Dashboard';


class App extends Component {
	componentDidMount() {
		this.props.fetchUser();
	}

	render() {
		return (
			<div>
				<BrowserRouter>
					<div>
							<Header />
							<Route exact path="/" component={Statistics} />
							<Route exact path="/" component={About} />
							<Route exact path="/" component={Footer} />
							<Switch>
								<Route exact path="/register" component={Register} />
								<Route exact path="/login" component={Login} />
								<Route exact path="/dashboard" component={Dashboard} />
							</Switch>
					</div>
				</BrowserRouter>
			</div>
		);

	}
};

export default connect(null, actions)(App);
