const router = require("express").Router();
const User = require("../model/User");
const verify = require("./verifyToken");
const Book = require("../model/Book");
const { starValidation } = require("../validation");
const Review = require("../model/Review");
const { updateOne } = require("../model/User");

// 	//info solo da quell'utente
// 	User.findOne({ _id: req.user });
// });

//Create new book
router.post("/", verify, async (req, res) => {
	const book = new Book({
		title: req.body.title.toLowerCase().replace(/\s+/g, ""),
		author: req.body.author.toLowerCase().replace(/\s+/g, ""),
	});
	try {
		const savedBook = await book.save();
		res.send(savedBook);
	} catch (error) {
		res.status(400).send(error);
	}
});

//Add a review

router.patch("/:bookTitle", verify, async (req, res) => {
	const { error } = starValidation(req.body);
	if (error) return res.status(400).send(error.details[0].message);

	const review = new Review({
		review: req.body.review,
		star: req.body.star,
	});

	try {
		const book = await Book.findOneAndUpdate(
			{ title: req.params.bookTitle },
			{ $push: { reviews: review } }
		);

		res.send(book);
	} catch (error) {
		res.status(400).send(error);
	}
});

//Get all the books
router.get("/", async (req, res) => {
	try {
		const books = await Book.find();
		res.json(books);
	} catch (error) {
		res.json({ message: error });
	}
});

//Get all the books by Star rate
router.get("/star", async (req, res) => {
	var starRate = { star: -1 };
	try {
		const books = await Book.find().sort(starRate);
		res.json(books);
	} catch (error) {
		res.json({ message: error });
	}
});

//get specific book by title
router.get("/:bookTitle", async (req, res) => {
	try {
		const book = await Book.find({
			title: req.params.bookTitle.toLowerCase().replace(/\s+/g, ""),
		});
		res.json(book);
	} catch (error) {
		res.json({ message: error });
	}
});

module.exports = router;
