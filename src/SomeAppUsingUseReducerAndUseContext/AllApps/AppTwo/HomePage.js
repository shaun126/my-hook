import React, { useContext } from 'react';

import AppContext from './app-context';
const HomePage = () => {
	const { isAuth, setIsAuth } = useContext(AppContext);

	return (
		<div style={{ background: isAuth ? 'green' : 'red' }}>
			<h2>This is Home Page</h2>

			<br />

			<button onClick={() => setIsAuth(!isAuth)}>{isAuth ? 'LogOut' : 'LogIn'}</button>
		</div>
	);
};

export default HomePage;
