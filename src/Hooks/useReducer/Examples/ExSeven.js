import React, { useReducer } from 'react';

const initialTodo = [
	{
		id: 1,
		title: 'Todo 1',
		complete: false,
	},

	{
		id: 2,
		title: 'Todo 2',
		complete: true,
	},
];

const reducer = (state, action) => {
	switch (action.type) {
		case 'COMPLETE':
			return state.map((todo) => (todo.id === action.id ? { ...todo, complete: !todo.complete } : todo));

		// ? the upper return are same as the comment return
		// return state.map((todo) => {
		// 	if (todo.id === action.id) {
		// 		return {
		// 			...todo,
		// 			complete: !todo.complete,
		// 		};
		// 	} else {
		// 		return todo;
		// 	}
		// });

		default:
			return state;
	}
};

const ExSeven = () => {
	// here todos are in array of object so we can map through it
	const [todos, dispatch] = useReducer(reducer, initialTodo);

	const handleComplete = (todo) => {
		dispatch({ type: 'COMPLETE', id: todo.id });
	};
	return (
		<div>
			{todos.map((todo) => (
				<div key={todo.id}>
					<label>
						<input type='checkbox' checked={todo.complete} onChange={() => handleComplete(todo)} /> {todo.title}
					</label>
				</div>
			))}
			<hr />
		</div>
	);
};

export default ExSeven;
