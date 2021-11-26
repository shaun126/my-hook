import React, { useReducer } from 'react';

const initialState = {
	counter: 5,
};

const reducer = (state, action) => {
	switch (action.type) {
		case 'increment':
			return { counter: state.counter + 1 };

		case 'decrement':
			return { counter: state.counter - 1 };

		default:
			return state;
	}
};

const ExTwo = () => {
	const [count, dispatch] = useReducer(reducer, initialState);

	const handelIncrement = () => {
		dispatch({ type: 'increment' });
	};

	const handleDecrement = () => {
		dispatch({ type: 'decrement' });
	};

	return (
		<div style={{ border: '1px solid blue' }}>
			<h5>Ex Two : dispatch using function</h5>

			<p>Count : {count.counter}</p>

			<button type='button' onClick={handelIncrement}>
				{' '}
				{/* here we are simplify the code */}
				Increment
			</button>

			<button type='button' onClick={handleDecrement} disabled={count.counter === 0 ? true : false}>
				Decrement
			</button>
		</div>
	);
};

export default ExTwo;
