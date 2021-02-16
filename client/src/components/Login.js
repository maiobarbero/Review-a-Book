import React from "react";
//Components
import RegistrationForm from "./RegistrationForm";
import LoginForm from "./LoginForm";
//Style & Animation
import styled from "styled-components";
import { motion } from "framer-motion";

const Login = () => {
	return (
		<LoginShadow className="shadow">
			<div className="container">
				<LoginForm />
				<RegistrationForm />
			</div>
		</LoginShadow>
	);
};

const LoginShadow = styled(motion.div)`
	width: 100%;
	height: 100vh;
	overflow-y: scroll;
	background: #fff;
	position: fixed;
	top: 0;
	left: 0;

	.container {
		height: 100%;
		width: 70%;
		margin: 0 auto;
	}
`;

export default Login;
