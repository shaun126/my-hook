import React, { useEffect, useRef, useState } from 'react';

const FilterJson = () => {
	const [jsonData, setJsonData] = useState([]);
	let filterRef = useRef([]);

	const [count, setCount] = useState(1);

	// first putting all fetch data to jsonData state
	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/albums`)
			.then((res) => res.json())
			.then((data) => {
				data.forEach((item) => {
					setJsonData((prev) => [...prev, item]);
				});
			});

		// console.log('Testing');

		return () => {
			// console.log('clear previous rendering');
			setJsonData([]);
		};
	}, [count]);

	// now we are filtering
	useEffect(() => {
		filterRef.current = jsonData?.filter((data) => data.userId === count);
		// console.log(filterRef.current);
	}, [jsonData, count]);

	console.log(jsonData);
	// console.log(filterRef);

	return (
		<div>
			<div>{count}</div>
			<button onClick={() => setCount((prev) => prev + 1)}>click</button>
			{jsonData &&
				filterRef.current?.map((item) => (
					<div key={Math.random()}>
						<p>
							{item.userId} - {item.title}
						</p>
					</div>
				))}
		</div>
	);
};

export default FilterJson;
