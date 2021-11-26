import React, { useState } from 'react';
import useEventListener from './useEventListener';

const EventListener = () => {
	const [key, setKey] = useState('');

	useEventListener('keydown', (e) => {
		setKey(e.key);
	});

	return (
		<div>
			<div>Last key: {key}</div>
		</div>
	);
};

export default EventListener;
