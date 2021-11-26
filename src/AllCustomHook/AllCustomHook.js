import React from 'react';
import ToggleComponent from './1-useToggle/ToggleComponent';
import ArrayComponent from './2-useArray/ArrayComponent';
import EventListener from './3-useEvenetListener/EventListener';
import WindowSizeComponent from './WindowSizeComponent/WindowSizeComponent';

const AllCustomHook = () => {
	return (
		<div>
			<WindowSizeComponent />
			<hr />
			<EventListener />
			<hr />
			<ArrayComponent />
			<hr />
			<ToggleComponent />
		</div>
	);
};

export default AllCustomHook;
