import { useEffect, useState } from 'react';

const useWindowSize = () => {
	const [widowSize, setWindowSize] = useState({
		// this will show after run page
		width: window.innerWidth,
		height: window.innerHeight,
	});

	// this will show after resizing every time
	useEffect(() => {
		window.addEventListener('resize', () => {
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		});
	}, []);
	return widowSize;
};

export default useWindowSize;
