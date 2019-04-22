import React, { Component } from 'react';

class Header extends Component {
	render() {
		return(
			<nav className="z-depth-0"> 
				<div className="nav-wrapper">
					<a className="left brand-logo">
						<i className="material-icons">spa</i>
					</a>
					<ul className="right">
						<li className="hvr-underline-from-center">
							Host a Field
						</li>
						<li className="hvr-underline-from-center">
							Find a Field
						</li>
						<li className="hvr-underline-from-center">
							About
						</li>
						<li className="hvr-underline-from-center">
							Sign Up
						</li>
						<li className="hvr-underline-from-center">
							Login
						</li>
					</ul> 
				</div>
			</nav>
		);
	}
}

export default Header;