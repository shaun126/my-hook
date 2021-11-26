import React from 'react';
import AppOne from './AllApps/AppOne';
import TodoApp from './AllApps/AppThreeTodo/TodoApp';
import AppTwo from './AllApps/AppTwo';

const SomeAppUsingUseReducerAndUseContext = () => {
	return (
		<div style={{ marginBottom: '5rem' }}>
			<TodoApp />
			<hr />
			<AppTwo />
			<hr />
			<AppOne />
		</div>
	);
};

export default SomeAppUsingUseReducerAndUseContext;
