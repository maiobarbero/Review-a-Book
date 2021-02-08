const mongoose = require("mongoose");
const User = require("./User");

const reviewSchema = new mongoose.Schema({
	review: { type: String },
	star: { type: Number },
	user: {
		type: mongoose.Schema.Types.String,
		ref: "User",
	},
});

module.exports = mongoose.model("Review", reviewSchema);
