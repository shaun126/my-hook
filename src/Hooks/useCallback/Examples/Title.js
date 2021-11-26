import React from 'react';

const Title = () => {
	// console.log('Rendering Title...');

	return (
		<div>
			<h1>useCallback & useMemo</h1>
			<h4>The main difference is that useMemo returns a memoized value and useCallback returns a memoized function</h4>
		</div>
	);
};

export default React.memo(Title); // <- Now the Title will not render bcz of memo() function while clicking the buttons
