import React from 'react';

import TodoInput from './TodoInput/TodoInput';
import TodoList from './TodoList/TodoList';

import './Style.css';
import TodoState from './context/TodoState';

const TodoApp = () => {
	return (
		<div className='todoApp'>
			<TodoState>
				<TodoInput />
				<br />
				<b></b>
				<TodoList />
			</TodoState>
		</div>
	);
};

export default TodoApp;
