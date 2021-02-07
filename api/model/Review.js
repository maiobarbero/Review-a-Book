const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
	review: { type: String },
	star: { type: Number },
});

module.exports = mongoose.model("Review", reviewSchema);
