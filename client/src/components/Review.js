import React from "react";
//Images
import starEmpty from "../img/star-empty.png";
import starFull from "../img/star-full.png";
//Style & Animation
import styled from "styled-components";
import { motion } from "framer-motion";

const Review = ({ stars, user, review, id }) => {
	const getStars = () => {
		const starsArray = [];
		const rating = stars;
		for (let i = 1; i <= 5; i++) {
			if (i <= rating) {
				starsArray.push(<img alt="star-full" key={i} src={starFull}></img>);
			} else {
				starsArray.push(<img alt="star-empty" key={i} src={starEmpty}></img>);
			}
		}
		return starsArray;
	};
	return (
		<StyledReview key={id}>
			<h1>{user}</h1>
			<Rating>
				<StarsDiv>{getStars()}</StarsDiv>
			</Rating>
			<div className="review">
				<p>{review}</p>
			</div>
			<Line></Line>
		</StyledReview>
	);
};

const Rating = styled(motion.div)`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding-bottom: 2rem;
`;

const Line = styled(motion.div)`
	height: 0.2rem;
	width: 100%;
	background-color: x;
	margin: 2rem 0;
`;
const StyledReview = styled(motion.div)``;

const StarsDiv = styled(motion.div)`
	img {
		display: inline;
		height: 2rem;
		width: 2rem;
	}
`;

export default Review;
