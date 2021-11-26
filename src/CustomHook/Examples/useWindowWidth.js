import { useEffect, useState } from 'react';

// This is out custom hook, we can use it anywhere
const useWindowWidth = (screenSize) => {
	const [onSmallScreen, setOnSmallScreen] = useState(false);

	useEffect(() => {
		const checkScreenSize = () => {
			setOnSmallScreen(window.innerWidth < screenSize);
		};

		checkScreenSize();

		window.addEventListener('resize', checkScreenSize);

		return () => window.removeEventListener('resize', checkScreenSize);
	}, [screenSize]);

	// <- here we just need to return the variable
	return onSmallScreen;
};

export default useWindowWidth;
