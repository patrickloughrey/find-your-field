import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';

const Landing = () => <h2> </h2>;

const Dashboard = () => <h2> Dashboard </h2>;

const NewHost = () => <h2> New Host </h2>;


const App = () => {
	return (
		<div>
			<BrowserRouter>
				<div>
					<Header />
					<Route exact path="/" component={Landing} />
					<Route path="/dashboard" component={Dashboard} />
				</div>
			</BrowserRouter>
		</div>
	);
};

export default App;