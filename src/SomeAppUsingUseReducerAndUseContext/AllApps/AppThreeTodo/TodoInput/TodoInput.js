import React, { useContext, useState } from 'react';

import TodoContext from '../context/TodoContext';

const TodoInput = () => {
	const [todo, setTodo] = useState('');
	const { addTodo } = useContext(TodoContext);

	const onSubmitHandler = (e) => {
		e.preventDefault();

		const newTodo = {
			id: Math.random(),
			text: todo,
			complete: false,
		};

		addTodo(newTodo);

		setTodo('');
	};

	const onChangeHandler = (e) => {
		setTodo(e.target.value);
	};

	return (
		<div>
			<h3>useContext + useReducer To-Do List</h3>

			<form onSubmit={onSubmitHandler}>
				<input type='text' value={todo} onChange={onChangeHandler} placeholder='Enter a Todo...' required />

				<button>Add Todo</button>
			</form>
		</div>
	);
};

export default TodoInput;
