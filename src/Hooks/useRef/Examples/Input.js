import React from 'react';

// Forward ref
const Input = ({ type, placeholder }, newRef) => {
	return (
		<div>
			<input ref={newRef} type={type} placeholder={placeholder} />
		</div>
	);
};

const forwardedInput = React.forwardRef(Input);

export default forwardedInput;
