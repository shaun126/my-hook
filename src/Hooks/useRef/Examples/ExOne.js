import React, { useEffect, useRef } from 'react';

const ExOne = () => {
	let inputRef = useRef(null); // <- It returns an Object called current.

	useEffect(() => {
		// console.log(inputRef.current);
		inputRef.current.focus();
	}, []);

	const handleChange = (e) => {
		inputRef = e.target.value;
		// console.log(inputRef);
	};

	return (
		<div>
			<input ref={inputRef} type='text' onChange={handleChange} placeholder='type something' />
		</div>
	);
};

export default ExOne;
