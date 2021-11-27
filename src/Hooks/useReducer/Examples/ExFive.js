import React, { useReducer } from 'react';
import ComponentA from './ComponentA';
import { counterContext } from '../../useContext/UseContext';

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
	const [{ counter }, dispatch] = useReducer(reducer, initialState);

	const handelIncrement = (val) => {
		// console.log(val);

		dispatch({
			type: 'increment',
			value: val,
		});
	};

	const handleDecrement = (val) => {
		// console.log(val);

		dispatch({
			type: 'decrement',
			value: val,
		});
	};

	return (
		<div style={{ border: '1px solid blue' }}>
			<h5>Ex Five: useReducer using useContext</h5>

			<p>Count : {counter}</p>

			<counterContext.Provider value={{ handelIncrement, handleDecrement, counter }}>
				<ComponentA />
			</counterContext.Provider>
		</div>
	);
};

export default ExFour;
