import React from 'react';
import ExFour from './Examples/ExFour';
import ExOne from './Examples/ExOne';
import ExThree from './Examples/ExThree';
import ExTwo from './Examples/ExTwo';
import ExFive from './Examples/ExFive';
import ExSix from './Examples/ExSix';
import ExSeven from './Examples/ExSeven';
import ExEight from './Examples/ExEight';

// Modern way use of = useReducer + useContext
import reducer, { initialState } from '../useContext/reducer';
import { StateProvider } from '../useContext/StateProvider';
import ExEightGetPost from './Examples/ExEightGetPost';

const UseReducer = () => {
	return (
		<div>
			<StateProvider initialState={initialState} reducer={reducer}>
				<ExEight />
				{/* // we are fetching data too  */}
				<ExEightGetPost />
			</StateProvider>
			<br />
			<ExSeven />
			<br />
			<ExSix />
			<br />
			<ExFive />
			<br />
			<ExFour />
			<br />
			<ExThree />
			<br />
			<ExTwo />
			<br />
			<ExOne />
		</div>
	);
};

export default UseReducer;
