import React, { useState } from 'react';

export default function TodoTwo() {
	const [todo, setState] = useState('');
	const [warning, setWarning] = useState(null);

	const handleInput = (e) => {
		// console.log(e.target);

		const inputValue = e.target.value;
		const newWarning = inputValue.includes('.js') ? 'You Need JavaScript to complete the task. Do you have it?' : null;

		setState(inputValue);
		setWarning(newWarning);
	};
	return (
		<div style={{ border: '1px solid green' }}>
			<h3>Todo Two: Using Hooks</h3>
			{todo}
			<br />

			<input type='text' onChange={handleInput} />
			<br />

			<h2>{warning || 'Good Choice'}</h2>
		</div>
	);
}
