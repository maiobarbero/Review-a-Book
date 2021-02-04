const mongoose = require("mongoose");

const ammountsSchema = new mongoose.Schema({
	category: {
		type: String,
		required: true,
	},
	value: {
		type: Number,
		required: true,
	},
	date: {
		type: Date,
		default: Date.now,
	},
});

const projectSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	description: {
		type: String,
	},
	ammounts: [ammountsSchema],

	date: {
		type: Date,
		default: Date.now,
	},
});

module.exports = mongoose.model("Project", projectSchema);
