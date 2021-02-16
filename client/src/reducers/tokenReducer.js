const initState = {
	token: "",
	isLogged: false,
};

const tokenReducer = (state = { initState }, action) => {
	switch (action.type) {
		case "GET_TOKEN":
			return {
				...state,
				token: action.payload.token,
			};

		default:
			return { ...state };
	}
};

export default tokenReducer;
