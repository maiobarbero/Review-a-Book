const initState = {
	books: [],
};

const booksReducer = (state = { initState }, action) => {
	switch (action.type) {
		case "FETCH_ALL":
			return { ...state };
		default:
			return { ...state };
	}
};

//Action Creator
const fetchBooks = (userData) => {
	return {
		type: "FETCH_ALL",
		payload: userData,
	};
};

export default booksReducer;
