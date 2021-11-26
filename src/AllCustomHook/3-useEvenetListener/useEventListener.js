import { useEffect, useRef } from 'react';

const useEventListener = (eventType, callback) => {
	const callbackRef = useRef(callback);

	useEffect(() => {
		callbackRef.current = callback;
	}, [callback]);

	useEffect(() => {
		// const handler = (e) => callbackRef.current(e);
		window.addEventListener(eventType, (e) => callbackRef.current(e));

		return () => window.removeEventListener(eventType, (e) => callbackRef.current(e));
	}, [eventType]);
};

export default useEventListener;
