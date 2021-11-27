import React, { useState, useEffect } from 'react';

const ExampleOne = () => {
	const [count, setCount] = useState(0);
	const [click, setClick] = useState(0);

	useEffect(() => {
		// setTimeout(tick, 1000);
		tick();

		console.log('Based on click state i rendered every click', click);
	}, [click]); // <- Remove [] bracket to see the difference

	const tick = () => {
		setCount((count) => count + 1);
	};

	return (
		<div style={{ border: '1px solid pink' }}>
			<h1>I have rendered {count} Times</h1>
			<button onClick={() => setClick((c) => c + 1)}>click me</button>
		</div>
	);
};

export default ExampleOne;
