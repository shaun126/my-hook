import React, { useEffect, useRef } from 'react';

const ExOne = () => {
	const inputRef = useRef(null); // <- It returns an Object called current.

	useEffect(() => {
		// console.log(inputRef.current);
		inputRef.current.focus();
	}, []);

	return (
		<div>
			<input ref={inputRef} type='text' placeholder='type something' />
		</div>
	);
};

export default ExOne;
