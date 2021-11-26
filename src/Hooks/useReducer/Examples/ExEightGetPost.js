import React, { useEffect } from 'react';
import { useStateValue } from '../../useContext/StateProvider';

const ExEightGetPost = () => {
	const [{ loading, post, error }, dispatch] = useStateValue();

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => response.json())
			.then((data) => {
				// console.log(data[0]);
				// console.log(Object.keys(data[0]));

				dispatch({
					type: 'SUCCESS',
					result: data,
				});
			})
			.catch(() => {
				dispatch({ type: 'ERROR' });
			});
	}, []);

	return (
		<div>
			{/* if loading true then show loading.... text else show data */}
			{loading
				? 'Loading......'
				: post.map((item) => {
						return (
							<div key={item.id}>
								<ul>
									<li style={{ listStyleType: 'square' }}>{item.id}</li>
									<li>{item.name}</li>
									<li>{item.username}</li>
									<li>{item.email}</li>
									<ul>
										<li>{item.address.city} </li>
										<li>{item.address.street} </li>
										<li>{item.address.zipcode} </li>
									</ul>
									<li>{item.phone}</li>
									<li>{item.website}</li>
								</ul>
								<hr style={{ borderColor: 'blue' }} />
							</div>
						);
				  })}

			<h3> {error || null}</h3>
		</div>
	);
};

export default ExEightGetPost;
