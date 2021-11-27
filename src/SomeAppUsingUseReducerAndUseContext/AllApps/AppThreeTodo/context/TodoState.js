import React, { useReducer } from 'react';
import reducer from './todo-reducer';
import TodoContext from './TodoContext';
import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from './todo-action';

const TodoState = ({ children }) => {
	const initialState = {
		todos: [], // {id: '123', text: 'Some text', complete: false}
	};
	const [{ todos }, dispatch] = useReducer(reducer, initialState);

	// Add todo
	const addTodo = (todo) => {
		dispatch({
			type: ADD_TODO,
			newTodo: todo,
		});
	};

	console.log(todos);

	// Toggle todo
	const toggleTodo = (todoID) => {
		dispatch({
			type: TOGGLE_TODO,
			newId: todoID,
		});
	};

	// Delete todo
	const deleteTodo = (todoID) => {
		dispatch({
			type: DELETE_TODO,
			payload: todoID,
		});
	};

	return (
		<div>
			<TodoContext.Provider
				value={{
					todos,
					addTodo,
					toggleTodo,
					deleteTodo,
				}}
			>
				{children}
			</TodoContext.Provider>
		</div>
	);
};

export default TodoState;
