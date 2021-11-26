import React, { useEffect, useState } from 'react';

const ExampleThree = () => {
	const [count, setCount] = useState(0);
	const [date, setDate] = useState(new Date());

	useEffect(() => {
		console.log('This will run once');
		const theTimer = setInterval(timer, 1000);

		// We need to use clearInterval, or after clicking "hide timer" button this will still run every every seconds, so wee need to stop it using the clearInterval
		return () => clearInterval(theTimer);
	}, []);

	const timer = () => {
		console.log('Testing');

		setDate(new Date());
	};

	const addCount = () => {
		setCount((prevCount) => prevCount + 1);
	};
	return (
		<div>
			<p>Time {date.toLocaleTimeString()}</p>
			<br />
			<p>{count}</p>
			<button onClick={addCount}>Add Count</button>
			<br />
			<br />
		</div>
	);
};

export default ExampleThree;
