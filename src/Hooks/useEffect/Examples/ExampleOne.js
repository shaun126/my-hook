import React, { useState, useEffect } from 'react';

const ExampleOne = () => {
	const [count, setCount] = useState(0);

	useEffect(() => {
		setTimeout(tick, 1000);
	}, []); // <- Remove [] bracket to see the difference

	const tick = () => {
		setCount((count) => count + 1);
	};
	return (
		<div style={{ border: '1px solid pink' }}>
			<h1>I have rendered {count} Times</h1>
		</div>
	);
};

export default ExampleOne;
