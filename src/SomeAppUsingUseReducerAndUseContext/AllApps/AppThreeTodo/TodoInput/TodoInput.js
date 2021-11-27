import React, { useContext, useState } from 'react';

import TodoContext from '../context/TodoContext';

const TodoInput = () => {
	const [todo, setTodo] = useState('');
	const [ids, setIds] = useState(1);

	const { addTodo } = useContext(TodoContext);

	const onSubmitHandler = (e) => {
		e.preventDefault();

		setIds((c) => c + 1);

		const newTodo = {
			id: ids,
			text: todo,
			complete: false,
		};

		addTodo(newTodo);

		setTodo('');
	};

	const onChangeHandler = (e) => {
		setTodo(() => e.target.value);
	};

	return (
		<div>
			<h4>useContext + useReducer To-Do List</h4>
			{ids}
			<form onSubmit={onSubmitHandler}>
				<input type='text' value={todo} onChange={onChangeHandler} placeholder='Enter a Todo...' required />

				<button>Add Todo</button>
			</form>
		</div>
	);
};

export default TodoInput;
