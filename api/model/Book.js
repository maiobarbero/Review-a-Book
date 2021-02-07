const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	author: {
		type: String,
	},
	review: {
		type: String,
		required: true,
	},
	star: {
		type: Number,
	},

	date: {
		type: Date,
		default: Date.now,
	},
});

module.exports = mongoose.model("Book", bookSchema);
