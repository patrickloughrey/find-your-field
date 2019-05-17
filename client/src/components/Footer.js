import React from 'react';

const Footer = () => {
	return(
		<footer className="text-white"> 
			<div className="container footer">
				<div className="row justify-content-center">
					<h3> <b> Drop </b> us a line. </h3>
				</div>
				<div className="row justify-content-center subscribe-row">
					<div className="col-md-6 form-subscribe">
						<input type="email" className="form-control form-control-rounded subscribe-form" id="exampleInputEmail1" placeholder="Insert your email" />
					</div>
					<div className="col-md-4 subscribe">
						<button type="submit" className="btn btn-white btn-block subscribe-btn">Subscribe</button>
					</div>
				</div>
			</div>
			<div className="jumbotron information">
				<div className="row justify-content-between align-items-center">
					<div className="col-md-5 text-md-left">
						<ul className="left footer-ul">
							<a href="/" className="footer-link"> <li className="footer-li info"> Contact </li> </a>
							<a href="/" className="footer-link"> <li className="footer-li info"> About Us </li> </a>
							<a href="/" className="footer-link"> <li className="footer-li info"> Legal </li> </a>
						</ul>
					</div>
					<div className="col-md-2">
						<i className="material-icons home">spa</i>
					</div>
					<div className="col-md-5 text-md-right">
						<ul className="right footer-ul">
							<li className="footer-li"> <a href="/" className="footer-link"> <i className="icofont-facebook icofont-2x"></i> </a> </li>
						    <li className="footer-li"> <a href="/" className="footer-link"> <i className="icofont-instagram icofont-2x"></i> </a> </li>
							<li className="footer-li"> <a href="/" className="footer-link"> <i className="icofont-twitter icofont-2x"></i> </a> </li> 
							<li className="footer-li"> <a href="/" className="footer-link"> <i className="icofont-linkedin icofont-2x"></i> </a> </li> 
						</ul>
					</div>
				</div>
			</div>
		</footer>
	)
}


export default Footer;