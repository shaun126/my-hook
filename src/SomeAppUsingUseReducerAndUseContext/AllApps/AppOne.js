import React, { useReducer, useState } from 'react';

const initialState = {
	count: 0,
};

const reducer = (state, action) => {
	switch (action.type) {
		case 'initCount':
			return {
				...state,
				count: state.count + action.payload,
			};

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

		default:
			return state;
	}
};

const AppOne = () => {
	const [input, setInput] = useState(0 || '');
	const [{ count }, dispatch] = useReducer(reducer, initialState);

	const handleNumber = (e) => {
		setInput(() => parseInt(e.target.value));
	};

	const handleInit = () => {
		if (input === '') {
			alert('type value plz');
			dispatch({
				type: 'initCount',
				payload: 0,
			});
		} else {
			dispatch({
				type: 'initCount',
				payload: input,
			});
		}
	};

	const handleIncrement = (val) => {
		dispatch({
			type: 'increment',
			value: val,
		});
	};
	const handleDecrement = (val) => {
		dispatch({
			type: 'decrement',
			value: val,
		});
	};

	return (
		<div>
			<h4>Reducer Example One:</h4>

			<div>
				<label>Start Count: </label>
				<input type='number' onChange={handleNumber} value={input} required />
				<br />
				<br />
				<button onClick={handleInit}>Initialize Counter</button>
			</div>

			<p>{count}</p>
			<p>input: {input}</p>

			<button onClick={() => handleIncrement(5)} disabled={count <= 0 ? true : false}>
				Increment by 5
			</button>
			<button onClick={() => handleDecrement(5)} disabled={count <= 0 ? true : false}>
				Decrement by 5
			</button>
		</div>
	);
};

export default AppOne;
