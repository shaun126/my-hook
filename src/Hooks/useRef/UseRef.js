import React from 'react';
import ExOne from './Examples/ExOne';
import ExThree from './Examples/ExThree';
import ExTwo from './Examples/ExTwo';

const UseRef = () => {
	return (
		<div>
			<p>
				useRef() only returns one item. It returns an Object called current. <br /> When we initialize useRef we set the initial value: useRef(0).
			</p>
			<ExThree />
			<br />
			<ExTwo />
			<br />
			<ExOne />
		</div>
	);
};

export default UseRef;
