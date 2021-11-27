import React from 'react';
// import UseReducer from './useReducer/UseReducer';
// import UseRef from './useRef/UseRef';
// import UseCallback from './useCallback/UseCallback';
// import UseEffect from './useEffect/UseEffect';
// import UseState from './UseState/UseState';

export default function Hooks() {
	return (
		<div>
			<h2 style={{ background: 'lightgreen' }}> useReducer </h2>
			{/* <UseReducer /> */}
			<br />

			<h2 style={{ background: 'lightyellow' }}> useRef </h2>
			{/* <UseRef /> */}
			<br />

			<h2 style={{ background: 'lightblue' }}> useCallback & useMemo Part</h2>
			{/* <UseCallback /> */}
			<br />

			<h2 style={{ background: 'lightgreen' }}> useEffect Part</h2>
			{/* <UseEffect /> */}
			<br />

			<h2 style={{ background: 'pink' }}> useState Part</h2>
			{/* <UseState /> */}
			<br />
		</div>
	);
}
