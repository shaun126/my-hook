import React from 'react';
import useWindowWidth from './useWindowWidth';

const ExThree = () => {
	// hre screen size in 600px
	const onSmallScreen = useWindowWidth(600);

	return (
		<div>
			<div style={{ border: '1px solid black' }} className={onSmallScreen ? 'Small' : 'Large'}>
				<h2>Third Example: Making custom hook using Custom Hook</h2>

				<p>Resize browser window to see the effect</p>
				<p>This will work for less than 600 px</p>
				<h3 style={onSmallScreen ? { background: 'orange', color: 'white' } : { background: 'green' }}>
					You are browsing on {onSmallScreen ? '"Small"' : '"Large"'} screen
				</h3>
			</div>
		</div>
	);
};

export default ExThree;
