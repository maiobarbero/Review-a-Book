const router = require("express").Router();
const User = require("../model/User");
const verify = require("./verifyToken");
const Book = require("../model/Book");
const { starValidation } = require("../validation");

// 	//info solo da quell'utente
// 	User.findOne({ _id: req.user });
// });

//Create new book
router.post("/", verify, async (req, res) => {
	const { error } = starValidation(req.body);
	if (error) return res.status(400).send(error.details[0].message);

	const book = new Book({
		name: req.body.name.toLowerCase().replace(/\s+/g, ""),
		author: req.body.author.toLowerCase().replace(/\s+/g, ""),
		review: req.body.review,
		star: req.body.star,
	});
	try {
		const savedBook = await book.save();
		res.send(savedBook);
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

//get specific book by name
router.get("/:bookTitle", async (req, res) => {
	try {
		const book = await Book.find({
			name: req.params.bookTitle.toLowerCase().replace(/\s+/g, ""),
		});
		res.json(book);
	} catch (error) {
		res.json({ message: error });
	}
});

module.exports = router;
