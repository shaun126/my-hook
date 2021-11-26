import React from 'react';
import { useStateValue } from '../../useContext/StateProvider';

const CompoReducerB = () => {
	// now we can use it any were
	const [state, dispatch] = useStateValue();
	const { counter } = state;

	const handleDecrement = (val) => {

		dispatch({
			...state,
			type: 'DECREMENT',
			value: val,
		});
	};

	return (
		<div>
			<button type='button' onClick={() => handleDecrement(5)} disabled={counter <= 0 ? true : false}>
				Decrement by 5
			</button>
		</div>
	);
};

export default CompoReducerB;
