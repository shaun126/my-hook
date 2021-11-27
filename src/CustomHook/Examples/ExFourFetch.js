import React from 'react';
import useFetch from './useFetch';

const ExFourFetch = () => {
	const data = useFetch('https://jsonplaceholder.typicode.com/users');

	return (
		<div>
			<h2>Custom hook using in API</h2>

			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>E-mail</th>
						<th>User name</th>
					</tr>
				</thead>
				<tbody>
					{data &&
						data.map((item) => (
							<tr key={item.id}>
								<td>{item.name}</td>
								<td>{item.email}</td>
								<td>{item.username}</td>
							</tr>
						))}
				</tbody>
			</table>

			{/* {data &&
				data.map((item) => (
					<div key={item.id}>
						<span>{item.email}</span>
						{' --- '}
						<span>{item.name}</span>
					</div>
				))} */}
		</div>
	);
};

export default ExFourFetch;
