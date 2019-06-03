import React from 'react';

const About = () => {
	return(
		<div className="container about">
			<div className="row">
				<div className="card-deck">
				  <div className="card text-center card-about">
					    <i className="icofont-company icofont-5x"></i>
					    <div className="card-body">
					      <h1 className="card-title">Sign Up</h1>
					      <p className="card-text"> Sign Up & create a profile for your team.</p>
					    </div>
				  </div>
				  <div className="card text-center card-about">
					    <i className="icofont-field icofont-5x"></i>
					    <div className="card-body">
					      <h1 className="card-title">Search for Fields</h1>
					      <p className="card-text"> Add fields to your profile for easy access to reservations.</p>
					    </div>
				  </div>
				  <div className="card text-center card-about">
					    <i className="icofont-team icofont-5x"></i>
					    <div className="card-body">
					      <h1 className="card-title">Make Reservations</h1>
					      <p className="card-text"> Reserve practices for your team & pay immediately!</p>
					    </div>
				  </div>
				</div>
			</div>
			<div className="row">
				<div className="card-deck">
				  <div className="card text-center card-about">
					    <i className="icofont-kick icofont-5x"></i>
					    <div className="card-body">
					      <h1 className="card-title">Practice More</h1>
					      <p className="card-text"> Easy Access to reservations means less time worrying about booking practice! </p>
					    </div>
				  </div>
				  <div className="card text-center card-about">
					    <i className="icofont-email icofont-5x"></i>
					    <div className="card-body">
					      <h1 className="card-title">Email Correspondence</h1>
					      <p className="card-text"> Email your team's parents by setting up automated emails about practice updates!</p>
					    </div>
				  </div>
				  <div className="card text-center card-about">
					    <i className="icofont-offside icofont-5x"></i>
					    <div className="card-body">
					      <h1 className="card-title">Leave Ratings</h1>
					      <p className="card-text"> Rate the fields you love & leave suggestions on fields you don't!</p>
					    </div>
				  </div>
				 </div>
			</div>
		</div>

	);
};

export default About;