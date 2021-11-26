import { createContext, useContext, useReducer } from 'react';

// Prepare the dataLayer
const StateContext = createContext();

// Wrap our app and provide the data layer
// StateProvider take some props
export const StateProvider = ({ reducer, initialState, children }) => (
	<StateContext.Provider value={useReducer(reducer, initialState)}>
		{/* // all component inside are children */}
		{children}
	</StateContext.Provider>
);

// Pull information from the data layer
export const useStateValue = () => useContext(StateContext);
