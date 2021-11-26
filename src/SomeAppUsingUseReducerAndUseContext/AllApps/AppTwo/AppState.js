import React, { useState } from 'react';
import AppContext from './app-context';

const AppState = ({ children }) => {
	const [isAuth, setIsAuth] = useState(true);

	return (
		<div>
			{/* // We can pass stateFunction too inside useContext */}
			<AppContext.Provider value={{ isAuth, setIsAuth, message: 'This is from context' }}>{children}</AppContext.Provider>
		</div>
	);
};

export default AppState;
