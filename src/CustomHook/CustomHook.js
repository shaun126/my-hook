import React from 'react';
import ExFourFetch from './Examples/ExFourFetch';
import ExOne from './Examples/ExOne';
import ExThree from './Examples/ExThree';
import ExTwo from './Examples/ExTwo';

const CustomHook = () => {
	return (
		<div>
			<h2 style={{ backgroundColor: 'lightblue' }}>Custom hook always start with use keyword </h2>

			<ExFourFetch />
			<hr />
			<ExThree />
			<br />
			<ExTwo />
			<br />
			<ExOne />
		</div>
	);
};

export default CustomHook;
