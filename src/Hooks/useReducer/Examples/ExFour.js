import React, { useReducer } from 'react';

const initialState = {
	counter: 0,
};

const reducer = (state, action) => {
	switch (action.type) {
		case 'increment':
			return {
				...state,
				counter: state.counter + action.value,
			};

		case 'decrement':
			return {
				...state,
				counter: state.counter - action.value,
			};

		default:
			return state;
	}
};

const ExFour = () => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const handelIncrement = (val) => {
		// console.log(val);

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
		<div style={{ border: '1px solid black' }}>
			<h5>Ex Four: handling multiple button and change value based on parameter</h5>

			<p>Count : {state.counter}</p>

			<button type='button' onClick={() => handelIncrement(2)}>
				Increment by 2
			</button>

			<button type='button' onClick={() => handelIncrement(5)}>
				Increment by 5
			</button>

			<br />
			<br />

			<button type='button' onClick={() => handleDecrement(5)} disabled={state.counter <= 0 ? true : false}>
				Decrement by 5
			</button>

			<button type='button' onClick={() => handleDecrement(2)} disabled={state.counter <= 0 ? true : false}>
				Decrement by 2
			</button>
		</div>
	);
};

export default ExFour;
