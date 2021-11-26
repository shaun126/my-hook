import React, { useState } from 'react';

export default function Car() {
	const [car, setCar] = useState({
		brand: 'Ford',
		model: 'Mustang',
		year: '1964',
		color: 'red',
	});

	const updateColor = () => {
		// Must use arrow function inside setCar function
		setCar((prevState) => {
			return {
				...prevState,
				color: 'YELLOW',
			};
		});
	};

	const { brand, model, year, color } = car;
	return (
		<div>
			<h1>My {brand}</h1>

			<p>
				It is a {color} {model} from {year}{' '}
			</p>

			<button onClick={updateColor}>Change Color</button>
		</div>
	);
}
