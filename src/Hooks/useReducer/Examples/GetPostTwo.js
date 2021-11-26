import React, { useEffect, useReducer } from 'react';

const initialState = {
	loading: true,

	// since we are fetching array of object so we need to make sure the post object is in array.
	post: [],
	error: '',
};

const reducer = (state, action) => {
	// console.log(action);

	switch (action.type) {
		case 'SUCCESS':
			return {
				loading: false,
				post: action.result,
				error: '',
			};

		case 'ERROR':
			return {
				loading: false,
				post: [],
				error: 'There was a problem',
			};
		default:
			return state;
	}
};

const GetPostTwo = () => {
	const [{ post, loading, error }, dispatch] = useReducer(reducer, initialState);

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => response.json())
			.then((data) => {
				// console.log(data[0]);
				// console.log(Object.keys(data[0]));

				dispatch({
					// ...state,
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
			<h4>Fetch data using useReducer</h4>

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
								<hr />
							</div>
						);
				  })}

			<h3> {error || null}</h3>
		</div>
	);
};

export default GetPostTwo;
