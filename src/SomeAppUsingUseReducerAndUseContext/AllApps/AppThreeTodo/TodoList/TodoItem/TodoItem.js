import React from 'react';

const TodoItem = ({ text, clickToToggle, clickToDelete, complete }) => {
	let styled = {
		display: 'flex',
		justifyContent: 'space-between',
		marginBottom: '5px',
	};
	return (
		<div style={styled}>
			<li style={{ background: complete ? 'yellow' : 'blue', listStyle: 'none' }}>{text}</li>

			<div>
				<button onClick={clickToToggle}>Toggle </button>
				<button onClick={clickToDelete}>Delete </button>
			</div>
		</div>
	);
};

export default TodoItem;
