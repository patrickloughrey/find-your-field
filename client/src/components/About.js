import React from 'react';

const About = () => {
	return(
		<div className="container about">
			<div className="row">
				<div className="card-deck">
				  <div className="card text-center">
					    <i className="icofont-team icofont-5x"></i>
					    <div className="card-body">
					      <h1 className="card-title">Become a Team Member</h1>
					      <p className="card-text">Add a profile for your team and receive priority & discounts on your favorite fields & facilities!</p>
					    </div>
				  </div>
				  <div className="card text-center">
					    <i className="icofont-field icofont-5x"></i>
					    <div className="card-body">
					      <h1 className="card-title">Make Reservations</h1>
					      <p className="card-text">Reserve up to a month worth of practices for your team at your favorite fields!</p>
					    </div>
				  </div>
				  <div className="card text-center">
					    <i className="icofont-kick icofont-5x"></i>
					    <div className="card-body">
					      <h1 className="card-title">Practice More</h1>
					      <p className="card-text">Easier access to reservations means more time for your team to practice & less time worrying about booking those practices! </p>
					    </div>
				  </div>
				</div>
			</div>
		</div>

	);
};

export default About;