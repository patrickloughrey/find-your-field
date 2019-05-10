import React from 'react';

const About = () => {
	return(
		<div className="container about">
			<div className="row">
				<div className="card-deck">
				  <div className="card text-center">
					    <i className="icofont-baseballer icofont-5x"></i>
					    <div className="card-body">
					      <h5 className="card-title">Card title</h5>
					      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
					    </div>
				  </div>
				  <div className="card text-center">
					    <i className="icofont-field icofont-5x"></i>
					    <div className="card-body">
					      <h5 className="card-title">Card title</h5>
					      <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
					    </div>
				  </div>
				  <div className="card text-center">
					    <i className="icofont-kick icofont-5x"></i>
					    <div className="card-body">
					      <h5 className="card-title">Card title</h5>
					      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
					    </div>
				  </div>
				</div>
			</div>
		</div>

	);
};

export default About;