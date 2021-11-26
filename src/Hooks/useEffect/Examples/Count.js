import React, { useState } from 'react';
import ExampleThree from './ExampleThree';

let style = {
	background: 'green',
	color: 'white',
	fontSize: '23px',
};

const Count = () => {
	const [show, setShow] = useState(false);

	return (
		<div style={{ border: '1px solid blue' }}>
			{/* // if true then show Example three */}
			<div>{show && <ExampleThree />}</div>
			<br />
			<button
				style={{ background: show ? (style.background = 'green') : (style.background = 'blue') }}
				onClick={() => setShow((prevShow) => !prevShow)}
			>
				{show ? 'Hide Timer' : 'Show Timer'}
			</button>
		</div>
	);
};

export default Count;
