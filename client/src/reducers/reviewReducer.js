const initialState = { book: [], isLoading: true };
const reviewReducer = (state = { initialState }, action) => {
	switch (action.type) {
		case "GET_REVIEW":
			return {
				...state,
				book: action.payload.book,
				isLoading: false,
			};
		case "LOADING_REVIEW":
			return {
				...state,
				isLoading: true,
			};
		default:
			return { ...state };
	}
};

export default reviewReducer;
