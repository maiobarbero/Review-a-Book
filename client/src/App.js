import React from "react";
//Components & Pages
import Home from "./pages/Home";
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
import UserNav from "./components/UserNav";

//Route
import { Route } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<GlobalStyle />
			<UserNav />
			<Nav />
			<Route path={["/book/:title", "/"]}>
				<Home />
			</Route>
		</div>
	);
}

export default App;
