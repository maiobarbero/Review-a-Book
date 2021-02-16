export const getToken = () => (dispatch) => {
	dispatch({
		type: "GET_TOKEN",
		payload: {
			token: localStorage.getItem("Auth"),
		},
	});
};
