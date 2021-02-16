const initState = {
	newBooks: [],
	popular: [],
	searched: [],
	isLoading: false,
};

const booksReducer = (state = { initState }, action) => {
	switch (action.type) {
		case "FETCH_ALL":
			return {
				...state,
				searched: action.payload.searched,
				newBooks: action.payload.books,
				popular: action.payload.popular,
				isLoading: false,
			};
		case "FECTH_SEARCHED":
			return {
				...state,
				searched: action.payload.searched,
				isLoading: false,
			};
		case "CLEAR_SEARCHED":
			return {
				...state,
				searched: [],
				isLoading: false,
			};
		case "LOADING":
			return {
				...state,
				isLoading: true,
			};
		default:
			return { ...state };
	}
};

export default booksReducer;
