import React, { useContext } from 'react';
import { counterContext } from '../../useContext/UseContext';

const ComponentB = () => {
	const countContext = useContext(counterContext);

	// we can destructure the value that pass via counterContext context
	const { handleDecrement, counter } = useContext(counterContext);

	return (
		<div>
			<button type='button' onClick={() => countContext.handleDecrement(5)} disabled={countContext.counter <= 0 ? true : false}>
				Decrement by 5
			</button>
			<button type='button' onClick={() => handleDecrement(10)} disabled={countContext.counter <= 0 ? true : false}>
				Decrement by 10
			</button>
			<br />
			<br />
			We can use count here too: {counter}
		</div>
	);
};

export default ComponentB;
