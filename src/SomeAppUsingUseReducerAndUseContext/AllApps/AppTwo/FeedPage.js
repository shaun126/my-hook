import React, { useContext } from 'react';

import AppContext from './app-context';

const FeedPage = () => {
	const { message } = useContext(AppContext);
	return (
		<div>
			<h2>This is Feed Page</h2>
			{message}
		</div>
	);
};

export default FeedPage;
