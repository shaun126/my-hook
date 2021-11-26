export const initialState = {
	counter: 0,

	loading: true,
	// since we are fetching array of object so we need to make sure the post object is in array.
	post: [],
	error: '',
};

const reducer = (state, action) => {
	console.log(action);

	switch (action.type) {
		// This section for counter
		case 'INCREMENT':
			return {
				...state,
				counter: state.counter + action.value,
			};

		case 'DECREMENT':
			return {
				...state,
				counter: state.counter - action.value,
			};

		// This is for fetch Api request
		case 'SUCCESS':
			return {
				...state,
				loading: false,
				post: action.result,
				error: '',
			};

		case 'ERROR':
			return {
				...state,
				loading: false,
				post: [],
				error: 'There was a problem',
			};
		default:
			return state;
	}
};

export default reducer;
