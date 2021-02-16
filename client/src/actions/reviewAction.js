import axios from "axios";
import { bookReviewsURL } from "../api";

export const loadReview = (id) => async (dispatch) => {
	dispatch({
		type: "LOADING_REVIEW",
	});
	const bookReview = await axios.get(bookReviewsURL(id));

	dispatch({
		type: "GET_REVIEW",
		payload: {
			book: bookReview.data[0],
		},
	});
};
