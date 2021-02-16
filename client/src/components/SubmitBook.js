import React, { useState } from "react";
//Style & Animation
import styled from "styled-components";
//Axios
import axios from "axios";
//Redux
import { useSelector, useDispatch } from "react-redux";

const SubmitBook = ({ toggle }) => {
	//Title
	const [titleInput, setTitle] = useState("");

	//Author
	const [authorInput, setAuthor] = useState("");

	const [filename, setFilename] = useState();

	const token = useSelector((state) => state.token.token);

	//set Cover on change
	const onChange = (e) => {
		setFilename(e.target.files[0]);
	};

	//Post Register
	const Submit = async (e) => {
		e.preventDefault();
		console.log(filename.name);
		const data = new FormData();
		data.append("author", authorInput);
		data.append("title", titleInput);
		data.append("image", filename);
		data.append(
			"imageTitle",
			titleInput.split(" ").join("").toLowerCase() + ".jpg"
		);

		await axios
			.post("http://localhost:3000/api/book", data, {
				headers: {
					"auth-token": token,
				},
			})
			.then((res) => {
				console.log(res);
			})
			.catch((error) => {
				// handle error
				console.log(error);
			});
		setAuthor("");
		setTitle("");
	};

	return (
		<>
			{toggle && (
				<Form>
					<form method="post" action="/upload" encType="multipart/form-data">
						<input
							type="text"
							id="title"
							value={titleInput}
							name="title"
							placeholder="title"
							onChange={(e) => {
								setTitle(e.target.value);
							}}
						/>
						<input
							type="text"
							id="author"
							value={authorInput}
							name="author"
							placeholder="Author"
							onChange={(e) => {
								setAuthor(e.target.value);
							}}
						/>
						<input
							type="file"
							name="image"
							onChange={onChange}
							accept="image/x-png,image/gif,image/jpeg"
						/>
						<button type="submit" onClick={Submit}>
							Submit
						</button>
					</form>
				</Form>
			)}
		</>
	);
};

const Form = styled.div`
	width: 100%;
	min-height: 100vh;
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

export default SubmitBook;
