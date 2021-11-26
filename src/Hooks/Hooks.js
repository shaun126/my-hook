import React from 'react';
// import UseReducer from './useReducer/UseReducer';
// import UseRef from './useRef/UseRef';
// import UseCallback from './useCallback/UseCallback';
// import UseEffect from './useEffect/UseEffect';
// import UseState from './UseState/UseState';

export default function Hooks() {
	return (
		<div>
			<h1 style={{ background: 'lightgreen' }}> useReducer </h1>
			{/* <UseReducer /> */}
			<br />

			<h1 style={{ background: 'lightyellow' }}> useRef </h1>
			{/* <UseRef /> */}
			<br />

			<h1 style={{ background: 'lightblue' }}> useCallback & useMemo Part</h1>
			{/* <UseCallback /> */}
			<br />

			<h1 style={{ background: 'lightgreen' }}> useEffect Part</h1>
			{/* <UseEffect /> */}
			<br />

			<h1 style={{ background: 'pink' }}> useState Part</h1>
			{/* <UseState /> */}
			<br />
		</div>
	);
}
