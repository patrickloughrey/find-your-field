import React from 'react';

const Statistics = () => {
	return(
		<div className="jumbotron stats">
			<div className="row align-items-center">
				<div className="col-lg-12">

				</div>
			</div>
			<div className="row align-items-center row-stats basketball animated fadeInLeft">
				<div className="col-lg-12 col-stats">
					<div className="card shadow">
					    <img src={require('./basketball.jpg')} className="img-fluid card-img-top" alt="..."/>
					    <div className="card-body body">
					      	<div className="form-label-group">
					    		<input type="text" className="form-control form-control-basketball" placeholder="Name" />
					    	</div>
					    	<div className="form-label-group">
					    		<input type="text" className="form-control form-control-basketball" placeholder="Email" />
					    	</div>
					    	<div className="form-label-group">
					    		<input type="text" className="form-control form-control-basketball" placeholder="Team" />
					    	</div>
					    	<a href="/" className="btn-large btn-coach">Start Today</a>
					    </div>
					</div>
					<div className="col-md-4">
						<h1 className="stat-header"> The most useful system ever created for <span className="basketball-tag"> coaches. </span> </h1>
						<p className="stat-body"> Using our system to book practice reservations saves time, money, & gives
							coaches more time to plan practice. </p>
						<div className="col-md-4 col-check">
							<i className="icofont-check-circled basketball-check"> Reserve Practice Facilities </i>
							<i className="icofont-check-circled basketball-check"> Make Direct Payments </i>
							<i className="icofont-check-circled basketball-check"> Leave Field Reviews </i>
						</div>
					</div>
				</div>
			</div>
			<div className="row align-items-center row-stats soccer animated fadeInRight">
				<div className="col-lg-12 col-stats">
					<div className="col-md-4">
						<h1 className="stat-header"> The most useful system ever created for <span className="soccer-tag"> hosts. </span> </h1>
						<p className="stat-body"> Hosts have the ability to list their fields, gyms, or stages on the Host platform
								so that coaches and teams can reserve practice right then and there.  </p>
						<div className="col-md-4 col-check">
							<i className="icofont-check-circled soccer-check"> Leave Team Reviews </i>
							<i className="icofont-check-circled soccer-check"> Book More Practices </i>
							<i className="icofont-check-circled soccer-check"> Analyze Feedback </i>
						</div>
					</div>
					<div className="card shadow soccer-card">
					    <img src={require('./soccer.jpg')} className="img-fluid card-img-top" alt="..."/>
					    <div className="card-body body">
					      	<div className="form-label-group">
					    		<input type="text" className="form-control form-control-soccer" placeholder="Name" />
					    	</div>
					    	<div className="form-label-group">
					    		<input type="text" className="form-control form-control-soccer" placeholder="Email" />
					    	</div>	
					    	<div className="form-label-group">
					    		<input type="text" className="form-control form-control-soccer" placeholder="Facility" />
					    	</div>
					    	<a href="/" className="btn-large btn-host">Become a Host</a>
					    </div>
					</div>
				</div>
			</div>
			<div className="row align-items-center row-stats baseball animated fadeInLeft">
				<div className="col-lg-12 col-stats">
					<div className="card shadow">
					    <img src={require('./baseball-md.jpg')} className="img-fluid card-img-top" alt="..."/>
					    <div className="card-body body">
					    	<div className="form-label-group">
					    		<input type="text" className="form-control form-control-baseball" placeholder="Name" />
					    	</div>
					    	<div className="form-label-group">
					    		<input type="text" className="form-control form-control-baseball" placeholder="Email" />
					    	</div>
					    	<div className="form-label-group">
					    		<input type="text" className="form-control form-control-baseball" placeholder="Team" />
					    	</div>
					    	<a href="/" className="btn-large btn-team">Create a Profile</a>
					    </div>
					</div>
					<div className="col-md-4">
						<h1 className="stat-header"> The most useful system ever created for <span className="baseball-tag"> teams. </span> </h1>
						<p className="stat-body"> Teams can create a team profile page, automate practice updates if a practice needs to be cancelled, and
								save their favorite fields for easier access to reservations & payment. </p>
						<div className="col-md-4 col-check">
							<i className="icofont-check-circled baseball-check"> Save Your Teams' Favorite Fields </i>
							<i className="icofont-check-circled baseball-check"> Automate Practice Updates</i>
							<i className="icofont-check-circled baseball-check"> Create a Team Profile </i>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Statistics;
