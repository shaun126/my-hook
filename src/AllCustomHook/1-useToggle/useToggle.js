import { useState } from 'react';

const useToggle = (defaultValue) => {
	const [value, setValue] = useState(defaultValue);

	// this callback state will work only for toggling
	// const toggle = useCallback(() => setValue((value) => !value), []);

	// this code will work for toggle , make true or make false
	const toggleValue = (value) => {
		setValue((currentValue) => {
			return typeof value === 'boolean' ? value : !currentValue;
		});
	};
	return [value, toggleValue];
};

export default useToggle;
