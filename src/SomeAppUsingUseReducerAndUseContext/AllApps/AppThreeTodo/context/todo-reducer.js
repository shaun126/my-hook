import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from '../context/todo-action';

const reducer = (state, action) => {
	// console.log(action);

	switch (action.type) {
		case ADD_TODO:
			return {
				...state,
				todos: [...state.todos, action.newTodo],
			};

		case TOGGLE_TODO:
			return {
				...state,
				// todos: state.todos.map((todo) => (todo.id === action.newId ? { ...todo, complete: !todo.complete } : todo)),

				// this code same as upper commented code but upper is simpler
				todos: state.todos.map((todo) => {
					if (todo.id === action.newId) {
						return {
							...todo,
							complete: !todo.complete,
						};
					} else {
						return todo;
					}
				}),
			};

		case DELETE_TODO:
			return {
				...state,
				todos: state.todos.filter((todo) => todo.id !== action.payload),
			};

		default:
			return state;
	}
};

export default reducer;
