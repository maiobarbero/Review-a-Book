const mongoose = require("mongoose");
const Ammount = require("./Ammount").schema;

const projectSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	description: {
		type: String,
	},
	ammounts: [Ammount],

	date: {
		type: Date,
		default: Date.now,
	},
});

module.exports = mongoose.model("Project", projectSchema);
