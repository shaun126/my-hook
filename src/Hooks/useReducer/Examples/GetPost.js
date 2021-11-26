import React, { useEffect, useState } from 'react';

const GetPost = () => {
	const [loading, setLoading] = useState(true);
	const [post, setPost] = useState({});
	const [error, setError] = useState('');

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/todos/1')
			.then((response) => response.json())
			.then((data) => {
				// console.log(data);

				setLoading(false);
				setPost(data);
				setError('');
			})
			.catch(() => {
				setLoading(false);
				setPost({});
				setError('There Was a problem');
			});
	}, []);

	return (
		<div style={{ border: '1px solid red' }}>
			<h4>Fetch data using useState</h4>
			{loading ? 'Loading....' : `${post.id}) ${post.title}`}
			{error || null}
		</div>
	);
};

export default GetPost;
