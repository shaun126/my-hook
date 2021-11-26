import React, { useCallback, useMemo, useState } from 'react';
import ShowCount from './Examples/ShowCount';
import Title from './Examples/Title';
import Button from './Examples/Button';

const UseCallback = () => {
	const [count1, setCount1] = useState(0);
	const [count2, setCount2] = useState(0);

	// * using useCallback()
	const incrementByOne = useCallback(() => {
		setCount1((prevCount) => prevCount + 1);
	}, []);

	const incrementByFive = useCallback(() => {
		setCount2((prevCount) => prevCount + 5);
	}, []);

	// * using useMemo()
	const isEven__orOdd = useMemo(() => {
		let i = 0;
		while (i < 1000000000) i++;
		return count1 % 2 === 0;
	}, [count1]); // <- Based of count1 state this function will render

	return (
		<div style={{ border: '1px solid blue' }}>
			<Title />

			<ShowCount count={count1} title='Counter 1' />

			<br />
			<Button handleIncrement={incrementByOne}>Increment By One </Button>

			<br />

			<ShowCount count={count2} title='Counter 2' />
			<br />
			<Button handleIncrement={incrementByFive}>Increment By Five </Button>
			<br />

			<span>{isEven__orOdd ? 'Even' : 'Odd'}</span>
		</div>
	);
};

export default UseCallback;
