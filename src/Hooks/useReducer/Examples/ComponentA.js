import React, { useContext } from 'react';
import ComponentB from './ComponentB';
import { counterContext } from '../../useContext/UseContext';

const ComponentA = () => {
	const countContext = useContext(counterContext);

	// we can destructure the value that pass via counterContext context
	const { handelIncrement } = useContext(counterContext);

	return (
		<div>
			<button type='button' onClick={() => countContext.handelIncrement(5)}>
				Increment by 5 man
			</button>

			<button type='button' onClick={() => handelIncrement(10)}>
				Increment by 10 man
			</button>

			<h5>Both way works</h5>

			<ComponentB />
		</div>
	);
};

export default ComponentA;
