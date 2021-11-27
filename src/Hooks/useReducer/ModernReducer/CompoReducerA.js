import React from 'react';
import { useStateValue } from '../../useContext/StateProvider';
import CompoReducerB from './CompoReducerB';

const CompoReducerA = () => {
	// now we can use it any were
	const [state, dispatch] = useStateValue();
	const { counter } = state;

	const handleIncrement = (val) => {
		dispatch({
			type: 'INCREMENT',
			value: val,
		});
	};

	return (
		<div>
			{counter}

			<br />
			<br />
			<button type='button' onClick={() => handleIncrement(5)}>
				Increment by 5
			</button>
			<br />
			<br />
			<CompoReducerB />
		</div>
	);
};

export default CompoReducerA;
