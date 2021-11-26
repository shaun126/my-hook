import React from 'react';

const TodoItem = ({ text, clickToToggle, clickToDelete, complete }) => {
	return (
		<div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
			<li style={{ background: complete ? 'yellow' : 'blue', listStyle: 'none' }}>{text}</li>

			<div>
				<button onClick={clickToToggle}>Toggle </button>
				<button onClick={clickToDelete}>Delete </button>
			</div>
		</div>
	);
};

export default TodoItem;
