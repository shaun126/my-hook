import React, { useReducer } from 'react';

const initialState = 0;

const reducer = (state, action) => {
	switch (action) {
		case 'increment':
			return state + 1;

		case 'decrement':
			return state - 1;

		default:
			return state;
	}
};

const ExOne = () => {
	const [count, dispatch] = useReducer(reducer, initialState);
	return (
		<div style={{ border: '1px solid green' }}>
			<h5>Ex One</h5>
	
			<p>Count : {count}</p>

			<button type='button' onClick={() => dispatch('increment')}>
				Increment
			</button>

			<button type='button' onClick={() => dispatch('decrement')}>
				Decrement
			</button>

			<hr />
			<div>
				Syntax The useReducer Hook accepts two arguments. <br />
				<h4> useReducer(reducer, initialState)</h4>
				The reducer function contains your custom state logic and the initialState can be a simple value but generally will contain an object. <br />
				The useReducer Hook returns the current state and a <b>dispatchmethod</b>.
			</div>
		</div>
	);
};

export default ExOne;
