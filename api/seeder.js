const seeder = require("mongoose-seed");
const dotenv = require("dotenv");

dotenv.config();

// Connect to MongoDB via Mongoose
seeder.connect(process.env.DB_CONNECT, function () {
	// Load Mongoose models
	seeder.loadModels(["./model/User", "./model/Book"]);

	// Clear specified collections
	seeder.clearModels(["User", "Book"], function () {
		// Callback to populate DB once collections have been cleared
		seeder.populateModels(data, function () {
			seeder.disconnect();
		});
	});
});

// Data array containing seed data - documents organized by Model
var data = [
	{
		model: "User",
		documents: [
			{
				name: "admin",
				email: "admin@admin.com",
				password: "password",
			},
			{
				name: "user",
				email: "user@user.com",
				password: "password",
			},
		],
	},
	{
		model: "Book",
		documents: [
			{
				title: "title 1",
				author: "test author 1",
			},
			{
				title: "title 2",
				author: "test author 2",
			},
		],
	},
];
