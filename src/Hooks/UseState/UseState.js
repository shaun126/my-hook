import React from 'react';
import Car from './Examples/Car';
import TodoOne from './Examples/TodoOne';
import TodoThree from './Examples/TodoThree';
import TodoTwo from './Examples/TodoTwo';

export default function UseState() {
	return (
		<div>
			<Car />
			<br />
			<TodoThree />
			<br />
			<TodoTwo />
			<br />
			<TodoOne />
		</div>
	);
}
