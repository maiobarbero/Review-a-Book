const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		min: 3,
	},
	email: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		require: true,
		max: 1024,
		min: 6,
	},
	date: {
		type: Date,
		default: Date.now,
	},
	avatar: {
		type: String,
	},
});

module.exports = mongoose.model("User", userSchema);
