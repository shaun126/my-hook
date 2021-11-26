import React, { useState } from 'react';

export default function TodoThree() {
	const [todo, setTodo] = useState({
		title: '',
		description: '',
	});

	const update__TodoTittle = (e) => {
		// Must use arrow function inside setTodo function
		setTodo((prevState) => {
			return {
				...prevState,
				title: e.target.value,
			};
		});
	};
	const update__TodoDescription = (e) => {
		// Must use arrow function inside setTodo function
		setTodo((prevState) => {
			return {
				...prevState,
				description: e.target.value,
			};
		});
	};

	// <- destructuring from todo object
	const { title, description } = todo;

	return (
		<div style={{ border: '1px solid orange' }}>
			<h3>Object in UseState</h3>

			{title}
			<br />

			<input type='text' value={title} onChange={update__TodoTittle} />
			<br />
			<br />

			<textarea name='todo' value={description} onChange={update__TodoDescription}></textarea>
			<br />
			{description || 'Hell Man i love useState'}
		</div>
	);
}
