import React, { useContext } from 'react';
import todoContext from '../context/TodoContext';
import TodoItem from './TodoItem/TodoItem';

const TodoList = () => {
	const { todos, toggleTodo, deleteTodo } = useContext(todoContext);

	return (
		<div>
			{todos.map((todo) => (
				<TodoItem
					key={todo.id}
					text={todo.text}
					complete={todo.complete}
					clickToToggle={() => toggleTodo(todo.id)}
					clickToDelete={() => deleteTodo(todo.id)}
				/>
			))}
		</div>
	);
};

export default TodoList;
