import React from "react";
//Redux
import { useDispatch } from "react-redux";
import { loadReview } from "../actions/reviewAction";
//Style & Animation
import styled from "styled-components";
import { motion } from "framer-motion";
//Router
import { Link } from "react-router-dom";

const Book = ({ title, author, image, id }) => {
	//Load review
	const dispatch = useDispatch();
	const loadReviewHandler = () => {
		document.body.style.overflow = "hidden";
		dispatch(loadReview(id));
	};
	//Img URL
	const imageURL = `http://localhost:3000/static/${image}`;

	return (
		<StyledBook onClick={loadReviewHandler}>
			<Link to={`/book/${id}`}>
				<h3>{title}</h3>
				<p>{author}</p>
				<img src={imageURL} alt={title} />
			</Link>
		</StyledBook>
	);
};

const StyledBook = styled(motion.div)`
	min-height: 30vh;
	box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
	text-align: center;
	border-radius: 1rem;
	cursor: pointer;
	overflow: hidden;
	img {
		width: 80%;
		height: 40vh;
		object-fit: cover;
		margin: 0 auto;
	}
`;

export default Book;
