import React, { useState, useEffect } from "react";
//Style & Animation
import styled from "styled-components";

//Axios
import axios from "axios";
import { loginUrl } from "../api";
//Redux
import { useDispatch } from "react-redux";
import { getToken } from "../actions/tokenAction";

const LoginForm = () => {
	//LOGIN
	//Email
	const [email, setEmail] = useState("");

	//Password
	const [pwd, setPwd] = useState("");

	//Post Login
	const FetchLogin = async (e) => {
		e.preventDefault();
		await axios
			.post(loginUrl(), {
				email: email,
				password: pwd,
			})
			.then((res) => {
				localStorage.setItem("Auth", res.data);
				dispatch(getToken());
			})
			.catch((error) => {
				// handle error
				console.log(error);
			});
		setPwd("");
		setEmail("");
	};
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getToken());
	}, []);
	return (
		<Form>
			{/* LOGIN Form */}
			<h3>
				Login to use <span>Review-A-Book</span>
			</h3>
			<form action="">
				<input
					type="text"
					id="email"
					value={email}
					name="email"
					placeholder="E-mail"
					onChange={(e) => {
						setEmail(e.target.value);
					}}
				/>
				<input
					type="text"
					id="password"
					value={pwd}
					name="password"
					placeholder="Password"
					onChange={(e) => {
						setPwd(e.target.value);
					}}
				/>
				<button type="submit" onClick={FetchLogin}>
					Login
				</button>
			</form>
		</Form>
	);
};

const Form = styled.div`
	width: 100%;
	min-height: 30vh;
	border-radius: 1rem;
	padding: 0rem 4rem;
	margin: 0 auto;
	color: #333;
	text-align: center;
	span {
		font-family: "Abril Fatface", cursive;
		font-weight: lighter;
	}
	form {
		flex-direction: column;
		display: flex;
		align-items: center;
		justify-content: space-around;
	}
	input {
		flex: 2;
		width: 70%;
		font-size: 1.5rem;
		padding: 0.5rem;
		border: none;
		outline: none;
		margin: 1.5rem 1rem;
		box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
	}
	button {
		flex: 1;
		font-size: 1.5rem;
		border: none;
		padding: 0.5rem 2rem;
		cursor: pointer;
		background: #23d997;
		color: #fff;
	}
`;

export default LoginForm;
