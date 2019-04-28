import React from 'react';

const Landing = () => {
	return(
		<div className="jumbotron jumbotron-fluid">
  			<h4 className="display-4 animated zoomIn">Find the perfect field for your team.</h4>
  			<p className="lead animated zoomIn delay-1s">Choose a date, reserve a field, make a payment & book your practice!</p>
  			<p className="second animated zoomIn delay-2s"> Save your team's favorites so you have easy access to them. </p>
  			<a class="waves-effect waves-light btn-large animated zoomIn delay-2s">Sign Up</a>
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
};

export default Landing;