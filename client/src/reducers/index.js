import { combineReducers } from "redux";
import booksReducer from "./booksReducer";
import reviewReducer from "./reviewReducer";
import tokenReducer from "./tokenReducer";

const rootReducer = combineReducers({
	books: booksReducer,
	review: reviewReducer,
	token: tokenReducer,
});

export default rootReducer;
