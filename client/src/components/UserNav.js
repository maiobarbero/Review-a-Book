import React, { useState } from "react";
//Components
import Login from "./Login";
import SubmitBook from "./SubmitBook";
//Style & Animation
import styled from "styled-components";
//Redux
import { useDispatch, useSelector } from "react-redux";
import { getToken } from "../actions/tokenAction";

//Route
import { useHistory } from "react-router-dom";

export default function UserNav() {
	const history = useHistory();
	const token = useSelector((state) => state.token.token);
	const dispatch = useDispatch();
	const [toggle, setToggle] = useState(false);

	return (
		<>
			<StyledNav>
				{!token && <h3>Login</h3>}
				<h3
					onClick={() => {
						localStorage.clear();
						dispatch(getToken());
					}}
				>
					Logout{" "}
				</h3>
				{!token && <Login />}

				<h3
					onClick={() => {
						setToggle(!toggle);
						if (toggle) {
							history.push("/");
						}
					}}
				>
					{!toggle ? <>Add a Book</> : <>Close</>}
				</h3>
			</StyledNav>
			<SubmitBook toggle={toggle} />
		</>
	);
}

const StyledNav = styled.nav`
	width: 100vw;
	height: 3rem;
	margin-bottom: 1rem;
	background: #23d997;
	display: flex;
	justify-content: space-between;
	align-items: center;
	h3 {
		font-size: 1rem;
		cursor: pointer;
	}
`;
