import React, { useEffect } from "react";
//Redux
import { useDispatch, useSelector } from "react-redux";
import { loadBooks } from "../actions/booksAction";
//Style & Animation
import styled from "styled-components";
import { motion } from "framer-motion";
//Components
import Book from "../components/Book";
import ReviewsList from "../components/ReviewsList";

//Route
import { useLocation } from "react-router-dom";

const Home = () => {
	//Get current location
	const location = useLocation();
	const pathId = location.pathname.split("/")[2];
	//Fetch
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(loadBooks());
	}, []);
	//Get the data
	const { popular, newBooks, searched } = useSelector((state) => state.books);
	//Check if there are searched books
	const check = () => {
		if (searched && searched.length > 0) {
			return true;
		} else {
			return false;
		}
	};
	return (
		<BookList>
			{pathId && <ReviewsList pathId={pathId} />}

			{check() && (
				<div div className="searched">
					<h2>Results</h2>
					<Books>
						{searched.map((book) => (
							<Book
								title={book.title}
								author={book.author}
								id={book._id}
								image={book.image}
								key={book._id}
								reviews={book.reviews}
							/>
						))}
					</Books>
				</div>
			)}

			<motion.h2>Recent Books</motion.h2>
			<Books>
				{newBooks &&
					newBooks.map((book) => (
						<Book
							title={book.title}
							author={book.author}
							id={book._id}
							image={book.image}
							key={book._id}
							reviews={book.reviews}
						/>
					))}
			</Books>
			<motion.h2>Popular Books</motion.h2>
			<Books>
				{popular &&
					popular.map((book) => (
						<Book
							title={book.title}
							author={book.author}
							id={book._id}
							image={book.image}
							key={book._id}
							reviews={book.reviews}
						/>
					))}
			</Books>
		</BookList>
	);
};

const BookList = styled(motion.div)`
	padding: 0rem 5rem;
	h2 {
		padding: 5rem 0rem;
	}
`;
const Books = styled(motion.div)`
	min-height: 80vh;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
	grid-column-gap: 3rem;
	grid-row-gap: 5rem;
`;

export default Home;
