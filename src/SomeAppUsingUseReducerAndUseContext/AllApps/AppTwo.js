import React from 'react';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import HomePage from './AppTwo/HomePage';
import FeedPage from './AppTwo/FeedPage';

import AppState from './AppTwo/AppState';

const AppTwo = () => {
	return (
		<div>
			<h4>App Two: Context Example</h4>

			<Router>
				<nav>
					<ul>
						<li>
							<Link to='/home'>Home</Link>
						</li>
						<li>
							<Link to='/feed'>Feed</Link>
						</li>
					</ul>
				</nav>

				<AppState>
					<Switch>
						<Route exact path='/home'>
							<HomePage />
						</Route>
						<Route exact path='/feed'>
							<FeedPage />
						</Route>
					</Switch>
				</AppState>
			</Router>
		</div>
	);
};

export default AppTwo;
