import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadBooks } from "./actions/booksAction";

function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(loadBooks());
	});
	return (
		<div className="App">
			<h1>Hello</h1>
		</div>
	);
}

export default App;
