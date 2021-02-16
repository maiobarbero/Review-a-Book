const router = require("express").Router();
const verify = require("./verifyToken");
const Book = require("../model/Book");
const { starValidation } = require("../validation");
const Review = require("../model/Review");

//Multer
const path = require("path");
const multer = require("multer");
const store = multer.diskStorage({
	destination: "./public/images",

	filename: function (req, file, cb) {
		cb(
			null,
			req.body.title.split(" ").join("").toLowerCase() +
				path.extname(file.originalname)
		);
	},
});

//Upload parameters

const upload = multer({
	storage: store,
});

//Create new book
router.post("/", upload.single("image"), verify, async (req, res, next) => {
	const book = new Book({
		title: req.body.title,
		author: req.body.author,
		image: req.body.imageTitle,
	});
	try {
		const savedBook = await book.save();
		res.send(savedBook);
	} catch (error) {
		res.send(error);
	}
});

//Add a review

router.patch("/review/:bookId", verify, async (req, res) => {
	const { error } = starValidation(req.body);
	if (error) return res.status(400).send(error.details[0].message);
	console.log(req.params.bookId);

	const newReview = new Review({
		review: req.body.review,
		star: req.body.star,
		user: req.user,
	});
	console.log(newReview);
	try {
		const book = await Book.findOneAndUpdate(
			{ _id: req.params.bookId },
			{
				$push: { reviews: newReview },
			}
		);
		console.log(book);
		res.send(book);
	} catch (error) {
		res.status(400).send(error);
	}
});

//Get all the books
router.get("/", async (req, res) => {
	try {
		const books = await Book.find()
			.limit(6)
			.populate({
				path: "reviews.user",
				select: "name",
			})
			.sort({ date: -1 });
		res.json(books);
	} catch (error) {
		res.json({ message: error });
	}
});

//Get all the books by Star rate
router.get("/popular", async (req, res) => {
	try {
		const books = await Book.find()
			.sort({ reviews: 1, _id: 1 })
			.limit(6)

			.populate({ path: "reviews.user", select: "name" });
		res.json(books);
	} catch (error) {
		res.json({ message: error });
	}
});

//get specific book by _id
router.get("/:bookId", async (req, res) => {
	try {
		const book = await Book.find({
			_id: req.params.bookId,
		}).populate({ path: "reviews.user", select: "name" });
		res.json(book);
	} catch (error) {
		res.json({ message: error });
	}
});

//get specific book by title
router.get("/title/:title", async (req, res) => {
	try {
		const book = await Book.find({
			title: { $regex: req.params.title, $options: "xi" },
		}).populate({
			path: "reviews.user",
			select: "name",
		});
		res.json(book);
	} catch (error) {
		res.json({ message: error });
	}
});

module.exports = router;
