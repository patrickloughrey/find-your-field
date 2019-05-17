import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import About from './About';
import Footer from './Footer';
import Register from './auth/Register';
import Login from './auth/Login';

const Dashboard = () => <h2> Dashboard </h2>;


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
						<Route exact path="/" component={About} />
						<Route exact path="/" component={Footer} />
						<Route exact path="/register" component={Register} />
						<Route exact path="/login" component={Login} />
						<Route exact path="/dashboard" component={Dashboard} />
					</div>
				</BrowserRouter>
			</div>
		);

	}
};

export default connect(null, actions)(App);