import React, { useState } from "react";
//Style & Animation
import styled from "styled-components";
import { motion } from "framer-motion";
//Redux and Routes
import { searchBook, clearSearch } from "../actions/booksAction";
import { useDispatch } from "react-redux";

const Nav = () => {
	const dispatch = useDispatch();
	const [textInput, setTextInput] = useState("");
	const inputHandler = (e) => {
		setTextInput(e.target.value);
	};
	const submitSearch = (e) => {
		e.preventDefault();
		dispatch(searchBook(textInput));
		setTextInput("");
	};
	const clickToClear = () => {
		dispatch(clearSearch());
	};
	return (
		<StyledNav>
			<Logo onClick={clickToClear}>Review-A-Book</Logo>

			<form className="search">
				<input onChange={inputHandler} value={textInput} type="text" />
				<button type="submit" onClick={submitSearch}>
					Search
				</button>
			</form>
		</StyledNav>
	);
};
const StyledNav = styled(motion.nav)`
	padding: 3rem 5rem;
	text-align: center;
	input {
		width: 30%;
		font-size: 1.5rem;
		padding: 0.5rem;
		border: none;
		outline: none;
		margin-top: 1.5rem;
		box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
	}
	button {
		font-size: 1.5rem;
		border: none;
		padding: 0.5rem 2rem;
		cursor: pointer;
		background: #23d997;
		color: #fff;
	}
`;
const Logo = styled(motion.h1)`
	padding: 0.5rem;
	cursor: pointer;
	font-family: "Abril Fatface", cursive;
	font-weight: lighter;
	color: #333;
`;

export default Nav;
