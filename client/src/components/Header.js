import React, { Component } from 'react';

class Header extends Component {
	render() {
		return(
			<nav className="z-depth-0"> 
				<div className="nav-wrapper">
					<a className="left brand-logo">
						<i className="material-icons">search</i>
					</a>
					<ul className="right">
						<li>
							<a> FIND A FIELD</a>
						</li>
						<li>
							<a> ABOUT </a>
						</li>
						<li>
							<a> SIGN UP </a>
						</li>
						<li className="">
							<a> LOGIN </a>
						</li>
					</ul> 
				</div>
			</nav>
		);
	}
}

export default Header;