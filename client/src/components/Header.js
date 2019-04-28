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
						<a href="" className="navBar"> Sign Up </a>
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
		);
	}
}

function mapStateToProps(state) {
	return { auth: state.auth }
}

export default connect(mapStateToProps)(Header);