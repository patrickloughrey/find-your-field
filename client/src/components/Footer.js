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
		</footer>
	)
}


export default Footer;