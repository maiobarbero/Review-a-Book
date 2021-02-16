import React, { useState } from "react";
// Redux
import { useSelector } from "react-redux";
//Route
import { useHistory } from "react-router-dom";
//Style & Animation
import styled from "styled-components";
import { motion } from "framer-motion";
//Components
import Review from "./Review";
import AddReview from "./AddReview";

const ReviewsList = ({ pathId }) => {
	const history = useHistory();
	const { book, isLoading } = useSelector((state) => state.review);
	//Close Review
	const closeReview = (e) => {
		const element = e.target;
		if (element.classList.contains("shadow")) {
			document.body.style.overflow = "auto";
			history.push("/");
		}
	};
	const [toggle, setToggle] = useState(false);

	return (
		<>
			{!isLoading && (
				<CardSHadow className="shadow" onClick={closeReview}>
					<Detail>
						<h2>{book.title}</h2>
						<h3
							onClick={() => {
								setToggle(!toggle);
								if (toggle) {
									history.push("/");
								}
							}}
						>
							{!toggle ? <>Add a Review</> : <>Close</>}
						</h3>
						<AddReview toggle={toggle} id={book._id} />
						{book.reviews.map((data) => (
							<Review
								title={book.title}
								stars={data.star}
								review={data.review}
								id={book._id}
							/>
						))}
					</Detail>
				</CardSHadow>
			)}
		</>
	);
};
const CardSHadow = styled(motion.div)`
	width: 100%;
	min-height: 100vh;
	overflow-y: scroll;
	background: rgba(0, 0, 0, 0.5);
	position: fixed;
	top: 0;
	left: 0;
`;

const Detail = styled(motion.div)`
	width: 80%;
	border-radius: 1rem;
	padding: 2rem 4rem;
	background: #fff;
	position: absolute;
	left: 10%;
	color: #000;
`;

export default ReviewsList;
