import React, { useEffect, useState } from 'react';

const FilterJson = () => {
	const [jsonData, setJsonData] = useState([]);
	const [count, setCount] = useState(1);

	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/albums`)
			.then((res) => res.json())
			.then((data) => {
				data.forEach((item) => {
					if (item.userId === 1) {
						setJsonData((prev) => [...prev, item]);
					}
					// setJsonData((prev) => [...prev, item]);
				});
			});
	}, [count]);

	// useEffect(() => {
	// 	jsonData?.filter((data) => data.userId === 1).map((item) => setJsonData(() => item));
	// });

	console.log(jsonData);

	return (
		<div>
			<div>{count}</div>
			<button onClick={() => setCount((c) => c + 1)}>click</button>
			{jsonData &&
				jsonData.map((item) => (
					<div key={Math.random()}>
						<p>
							{item.id} - {item.title}
						</p>
					</div>
				))}
		</div>
	);
};

export default FilterJson;
