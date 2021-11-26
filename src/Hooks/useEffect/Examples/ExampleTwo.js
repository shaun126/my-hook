import React, { useEffect, useState } from 'react';

const ExampleTwo = () => {
	const [count, setCount] = useState(0);
	const [calculation, setCalculation] = useState(0);

	useEffect(() => {
		setCalculation(() => count * 2);
	}, [count]); // <- based on this 'count' variable the value will change and will store in the 'calculation' variable

	return (
		<div>
			<h5>useEffect: Example Two</h5>
			<p>Count: {count} </p>

			<button type='button' onClick={() => setCount((c) => c + 1)}>
				+
			</button>

			<p>Calculation: {calculation} </p>
		</div>
	);
};

export default ExampleTwo;
