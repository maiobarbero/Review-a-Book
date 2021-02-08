const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
	review: { type: String },
	star: { type: Number },
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
	},
});

module.exports = mongoose.model("Review", reviewSchema);
