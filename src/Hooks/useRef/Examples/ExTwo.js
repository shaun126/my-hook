import React, { useEffect, useRef } from 'react';
import Input from './Input';

const ExTwo = () => {
	const inputRef = useRef(null); // <- It returns an Object called current.

	useEffect(() => {
		// console.log(inputRef.current);
		inputRef.current.focus();
	}, []);

	return (
		<div>
      <hr />
      <h4>Forward Ref</h4>
			<Input ref={inputRef} type='text' placeholder='Type Something......' />
      <hr />
		</div>
	);
};

export default ExTwo;
