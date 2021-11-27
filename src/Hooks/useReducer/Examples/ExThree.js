import React, { useReducer } from 'react';

const initialState = {
	counter: 0,
};

const reducer = (state, action) => {
	switch (action.type) {
		case 'increment':
			return { counter: state.counter + action.value };

		case 'decrement':
			return { counter: state.counter - action.value };

		default:
			return state;
	}
};

const ExThree = () => {
	const [{ counter }, dispatch] = useReducer(reducer, initialState);

	const handelIncrement = () => {
		dispatch({
			type: 'increment',
			value: 5,
		});
	};

	const handleDecrement = () => {
		dispatch({
			type: 'decrement',
			value: 3,
		});
	};

	return (
		<div style={{ border: '1px solid orange' }}>
			<h5>Ex three: dispatch and changed by value</h5>

			<p>Count : {counter}</p>

			<button type='button' onClick={handelIncrement}>
				Increment by 5
			</button>

			<button type='button' onClick={handleDecrement} disabled={counter <= 0 ? true : false}>
				Decrement by 3
			</button>
		</div>
	);
};

export default ExThree;
