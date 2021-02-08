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
				title: "Figure",
				author: "Riccardo Falcinelli",
			},
			{
				title: "Eymerich risorge",
				author: "Valerio Evangelisti",
			},
			{
				title: "Flatlandia",
				author: "Edwin A. Abbot",
			},
			{
				title: "Animal Farm",
				author: "George Orwell",
			},
			{
				title: "Cowspiracy",
				author: "Kip Andresen e Keegan Kuhn",
			},
			{
				title: "Il buio profondo",
				author: "R. A. Salvatore",
			},
			{
				title: "La democrazia in America",
				author: "Alexis de Tocqueville",
			},
		],
	},
];
