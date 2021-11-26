import React, { useEffect, useRef, useState } from 'react';

const Time = () => {
	let [date, setDate] = useState(new Date());

	const buttonRef = useRef(null);

	useEffect(() => {
		buttonRef.current = setInterval(tick, 1000);

		return () => clearInterval(buttonRef.current);
	}, []);

	const tick = () => {
		// console.log('Testing');

		setDate(new Date());
	};
	return (
		<div>
			<p>Time {date.toLocaleTimeString()}</p>
			<button type='button' onClick={() => clearInterval(buttonRef.current)}>
				Stop Timer
			</button>
		</div>
	);
};

export default Time;
