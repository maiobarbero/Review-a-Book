import axios from "axios";

const booksURL = "http://localhost:3000/api/book";

//Action creator

export const loadBooks = () => async (dispatch) => {
	//Fetch with Axios
	const lastBooks = await axios.get(booksURL);
	dispatch({
		type: "FETCH_ALL",
		payload: {
			books: lastBooks.data,
		},
	});
};
