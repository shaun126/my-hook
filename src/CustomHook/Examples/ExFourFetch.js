import React from 'react';
import useFetch from './useFetch';

const ExFourFetch = () => {
	const data = useFetch('https://jsonplaceholder.typicode.com/users');

  
  
	return (
		<div>
			<h2>Custom hook using in API</h2>
			{data && data.map((item) => <p key={item.id}>{item.name}</p>)}
		</div>
	);
};

export default ExFourFetch;
