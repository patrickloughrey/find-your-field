import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

class Dashboard extends Component {

	render() {
		return(
			<div className="jumbotron dashboard">
			  <h1 className="display-4">Dashboard!</h1>
			</div>
		);
	};
}

export default Dashboard;

