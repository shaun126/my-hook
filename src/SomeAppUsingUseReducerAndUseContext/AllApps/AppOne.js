import React, { useReducer, useState } from 'react';

const initialState = {
	count: 0,
};

const reducer = (state, action) => {
	switch (action.type) {
		case 'increment':
			return {
				...state,
				count: state.count + action.value,
			};

		case 'decrement':
			return {
				...state,
				count: state.count - action.value,
			};
		case 'initCount':
			return {
				...state,
				count: state.count + action.payload,
			};
		default:
			return state;
	}
};

const AppOne = () => {
	const [input, setInput] = useState(0);
	const [{ count }, dispatch] = useReducer(reducer, initialState);

	const handleNumber = (e) => {
		setInput(parseInt(e.target.value));
	};

	const handleInit = () => {
		dispatch({
			type: 'initCount',
			payload: input,
		});
	};

	const handleIncrement = () => {
		dispatch({
			type: 'increment',
			value: 5,
		});
	};
	const handleDecrement = () => {
		dispatch({
			type: 'decrement',
			value: 5,
		});
	};

	return (
		<div>
			<h1>Reducer Example One</h1>

			<div>
				<label>Start Count: </label>
				<input type='number' onChange={handleNumber} value={input} />
				<br />
				<br />
				<button onClick={handleInit}>Initialize Counter</button>
			</div>

			<p>{count}</p>

			<button onClick={handleIncrement}>Increment</button>
			<button onClick={handleDecrement} disabled={count <= 0 ? true : false}>
				Decrement
			</button>
		</div>
	);
};

export default AppOne;
