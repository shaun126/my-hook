import React from 'react';

const Button = ({ handleIncrement, children }) => {
	// console.log(`Rendering Button ${children}`);

	return (
		<div>
			<button type='button' onClick={handleIncrement}>
				{children}
			</button>
		</div>
	);
};

export default React.memo(Button);
