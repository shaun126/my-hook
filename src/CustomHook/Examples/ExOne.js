import React, { useEffect, useState } from 'react';

const ExOne = () => {
	const [onSmallScreen, setOnSmallScreen] = useState(false);

	// this function is now outside but when we are making custom hook this will be inside of useEffect() function
	const checkScreenSize = () => {
		setOnSmallScreen(window.innerWidth < 768);
	};

	useEffect(() => {
		checkScreenSize();

		window.addEventListener('resize', checkScreenSize);

		return () => window.removeEventListener('resize', checkScreenSize);
	}, []);

	return (
		<div style={{ border: '1px solid green' }}>
			<h4>First Example: without using custom hook</h4>
			<p>Resize browser window to see the effect</p>

			<h3 style={{ background: onSmallScreen ? 'green' : 'blue' }}>You are browsing on {onSmallScreen ? 'Small' : 'Large'} screen</h3>
		</div>
	);
};

export default ExOne;
