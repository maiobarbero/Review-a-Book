import React, { useState } from "react";
//Style & Animation
import styled from "styled-components";
//Axios
import axios from "axios";
//Redux
import { useSelector } from "react-redux";

const AddReview = ({ toggle, id }) => {
	const token = useSelector((state) => state.token.token);
	//Review
	const [reviewInput, setReview] = useState("");
	const [starInput, setStar] = useState(0);

	//Post Review
	const Submit = async (e) => {
		e.preventDefault();
		await axios
			.patch(
				`http://localhost:3000/api/book/review/${id}`,
				{
					review: reviewInput,
					star: starInput,
				},
				{
					headers: {
						"auth-token": token,
					},
				}
			)
			.then((res) => {
				console.log(res);
			})
			.catch((error) => {
				// handle error
				console.log(error);
			});

		setReview("");
	};

	return (
		<>
			{toggle && (
				<Form>
					<form>
						<textarea
							id="review"
							value={reviewInput}
							name="review"
							placeholder="review"
							onChange={(e) => {
								setReview(e.target.value);
							}}
						/>
						<label htmlFor="star">Stars {starInput}/5</label>
						<input
							name="star"
							type="range"
							min="0"
							max="5"
							step="1"
							value={starInput}
							onChange={(e) => {
								setStar(e.target.value);
							}}
						></input>

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
	label {
		font-family: "Abril Fatface", cursive;
		font-weight: lighter;
		font-size: 1.2rem;
	}
	form {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-around;
	}
	input,
	textarea {
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

export default AddReview;
