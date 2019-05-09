import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {

	renderContent() {
		 switch(this.props.auth) {
		 	case null:
		 		return;
		 	case false:
		 		return <ul className="right">
		 			<li className="hvr-underline-from-center">
						<a href="" className="navBar"> Host a Field </a>
					</li>
					<li className="hvr-underline-from-center">
						<a href="" className="navBar"> Find a Field </a>
					</li>
					<li className="hvr-underline-from-center">
						<a href="" className="navBar"> About </a>
					</li>
					<li className="hvr-underline-from-center">
						<a href="/register" className="navBar"> Sign Up </a>
					</li>
					<li className="hvr-underline-from-center no-shadow">
		 				<a href="/auth/google" className="navBar"> Login </a>
		 			</li>
		 		</ul>;
		 	default:
		 		return <ul className="right">
			 		<li className="hvr-underline-from-center">
						<a href="" className="navBar"> Host a Field </a>
					</li>
					<li className="hvr-underline-from-center">
						<a href="" className="navBar"> Find a Field </a>
					</li>
					<li className="hvr-underline-from-center">
						<a href="" className="navBar"> About </a>
					</li>
					<li className="hvr-underline-from-center">
			 			<a href="/api/logout" className="navBar"> Logout </a>
			 		</li>
			 	</ul>;
		 }
	}

	render() {
		return(
			<div className="jumbotron jumbotron-fluid header">
				<nav className="z-depth-0 animated zoomIn delay-2s"> 
					<div className="nav-wrapper">
						<Link 
							to={this.props.auth ? '/dashboard' : '/'} 
							className="left brand-logo">
								<i className="material-icons">spa</i>
						</Link>

						{this.renderContent()}

					</div>
				</nav>
	  			<h4 className="display-4 animated zoomIn">Find the perfect field for your team.</h4>
	  			<p className="lead animated zoomIn delay-1s">Choose a date, reserve a field, make a payment & book your practice!</p>
	  			<p className="second animated zoomIn delay-2s"> Save your team's favorites so you have easy access to them. </p>
	  			<a href="/register" className="waves-effect waves-light btn-large animated zoomIn delay-2s">Sign Up</a>
	  			<div className="container">
	  				<div className="row">
	  					<div className="col-12">
			  				<a className="center brand-logo">
								<i className="material-icons arrow animated infinite bounce delay-2s">keyboard_arrow_down</i>
							</a>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { auth: state.auth }
}

export default connect(mapStateToProps)(Header);