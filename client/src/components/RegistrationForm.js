import React, { useState } from "react";
//Style & Animation
import styled from "styled-components";

//Axios
import axios from "axios";
import { registerUrl } from "../api";

const RegistrationForm = () => {
	//Email
	const [emailReg, setEmailReg] = useState("");

	//Username
	const [userReg, setUserReg] = useState("");

	//Password
	const [pwdReg, setPwdReg] = useState("");

	//Registartion State
	const [resReg, setResReg] = useState();
	//Post Register
	const Register = async (e) => {
		e.preventDefault();
		await axios
			.post(registerUrl(), {
				name: userReg,
				email: emailReg,
				password: pwdReg,
			})
			.then((res) => {
				console.log(res.data);
				setResReg(res.data);
			})
			.catch((error) => {
				// handle error
				console.log(error);
			});
		setPwdReg("");
		setUserReg("");
		setEmailReg("");
	};

	return (
		<Form>
			<h3>Or register if you don't have an account</h3>
			<form action="">
				<input
					type="text"
					id="username"
					value={userReg}
					name="name"
					placeholder="Username"
					onChange={(e) => {
						setUserReg(e.target.value);
					}}
				/>
				<input
					type="text"
					id="email"
					value={emailReg}
					name="email"
					placeholder="E-mail"
					onChange={(e) => {
						setEmailReg(e.target.value);
					}}
				/>
				<input
					type="text"
					id="password"
					value={pwdReg}
					name="password"
					placeholder="Password"
					onChange={(e) => {
						setPwdReg(e.target.value);
					}}
				/>
				<button type="submit" onClick={Register}>
					Register
				</button>
			</form>
			<h4>{resReg}</h4>
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
		display: flex;
		flex-direction: column;
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

export default RegistrationForm;
