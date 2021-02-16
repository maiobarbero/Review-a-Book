import axios from "axios";
import { allBooksURL, popularBooksURL, bookSearchURL } from "../api";

//Action creator

export const loadBooks = () => async (dispatch) => {
	//Fetch with Axios
	const lastBooks = await axios.get(allBooksURL());
	const popularBooks = await axios.get(popularBooksURL());
	dispatch({
		type: "LOADING",
	});
	dispatch({
		type: "FETCH_ALL",
		payload: {
			books: lastBooks.data,
			popular: popularBooks.data,
			searched: [],
		},
	});
};

export const searchBook = (title) => async (dispatch) => {
	const searchedBooks = await axios.get(bookSearchURL(title));

	dispatch({
		type: "FECTH_SEARCHED",
		payload: {
			searched: searchedBooks.data,
		},
	});
};

export const clearSearch = () => (dispatch) => {
	dispatch({
		type: "CLEAR_SEARCHED",
	});
};
