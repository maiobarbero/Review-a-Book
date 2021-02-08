const initState = {
	books: [],
};

const booksReducer = (state = { initState }, action) => {
	switch (action.type) {
		case "FETCH_ALL":
			return { ...state, books: action.payload.books };
		default:
			return { ...state };
	}
};

export default booksReducer;
