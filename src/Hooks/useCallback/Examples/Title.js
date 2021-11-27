import React from 'react';

const Title = () => {
	// console.log('Rendering Title...');

	return (
		<div>
			<h2>useCallback & useMemo</h2>
			<p>The main difference is that useMemo returns a memoized value and useCallback returns a memoized function</p>
		</div>
	);
};

export default React.memo(Title); // <- Now the Title will not render bcz of memo() function while clicking the buttons
