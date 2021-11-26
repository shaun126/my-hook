import React, { useContext } from 'react';

import AppContext from './app-context';
const HomePage = () => {
	const { isAuth, setIsAuth } = useContext(AppContext);

	return (
		<div style={{ background: isAuth ? 'green' : 'red' }}>
			<h2>This is Home Page</h2>

			<br />

			{isAuth ? <button onClick={() => setIsAuth(false)}>LogOut</button> : <button onClick={() => setIsAuth(true)}>LogIn</button>}
		</div>
	);
};

export default HomePage;
