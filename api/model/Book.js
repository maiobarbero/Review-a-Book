const mongoose = require("mongoose");
const Review = require("./Review").schema;

const bookSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	author: {
		type: String,
	},
	reviews: [Review],

	date: {
		type: Date,
		default: Date.now,
	},
	image: { type: String, default: "default.png" },
});

module.exports = mongoose.model("Book", bookSchema);
