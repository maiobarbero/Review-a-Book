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
				reviews: [
					{
						review:
							"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dictum et ante tempus convallis. Praesent bibendum condimentum efficitur. Integer vulputate sit amet eros vitae viverra. Fusce eget libero tempus, volutpat sem sed, porta quam. Etiam a enim nunc. Nullam nec imperdiet sapien. In ac tortor tempus, luctus dolor a, consequat ligula.",
						star: 5,
					},
					{
						review:
							"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dictum et ante tempus convallis. Praesent bibendum condimentum efficitur. Integer vulputate sit amet eros vitae viverra. Fusce eget libero tempus, volutpat sem sed, porta quam. Etiam a enim nunc. Nullam nec imperdiet sapien. In ac tortor tempus, luctus dolor a, consequat ligula.",
						star: 2,
					},
				],
			},
			{
				title: "Eymerich risorge",
				author: "Valerio Evangelisti",
				reviews: [
					{
						review:
							"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dictum et ante tempus convallis. Praesent bibendum condimentum efficitur. Integer vulputate sit amet eros vitae viverra. Fusce eget libero tempus, volutpat sem sed, porta quam. Etiam a enim nunc. Nullam nec imperdiet sapien. In ac tortor tempus, luctus dolor a, consequat ligula.",
						star: 5,
					},
					{
						review:
							"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dictum et ante tempus convallis. Praesent bibendum condimentum efficitur. Integer vulputate sit amet eros vitae viverra. Fusce eget libero tempus, volutpat sem sed, porta quam. Etiam a enim nunc. Nullam nec imperdiet sapien. In ac tortor tempus, luctus dolor a, consequat ligula.",
						star: 5,
					},

					{
						review:
							"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dictum et ante tempus convallis. Praesent bibendum condimentum efficitur. Integer vulputate sit amet eros vitae viverra. Fusce eget libero tempus, volutpat sem sed, porta quam. Etiam a enim nunc. Nullam nec imperdiet sapien. In ac tortor tempus, luctus dolor a, consequat ligula.",
						star: 4,
					},
					{
						review:
							"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dictum et ante tempus convallis. Praesent bibendum condimentum efficitur. Integer vulputate sit amet eros vitae viverra. Fusce eget libero tempus, volutpat sem sed, porta quam. Etiam a enim nunc. Nullam nec imperdiet sapien. In ac tortor tempus, luctus dolor a, consequat ligula.",
						star: 3,
					},
				],
			},
			{
				title: "Flatlandia",
				author: "Edwin A. Abbot",
			},
			{
				title: "Animal Farm",
				author: "George Orwell",
				reviews: [
					{
						review:
							"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dictum et ante tempus convallis. Praesent bibendum condimentum efficitur. Integer vulputate sit amet eros vitae viverra. Fusce eget libero tempus, volutpat sem sed, porta quam. Etiam a enim nunc. Nullam nec imperdiet sapien. In ac tortor tempus, luctus dolor a, consequat ligula.",
						star: 1,
					},
					{
						review:
							"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dictum et ante tempus convallis. Praesent bibendum condimentum efficitur. Integer vulputate sit amet eros vitae viverra. Fusce eget libero tempus, volutpat sem sed, porta quam. Etiam a enim nunc. Nullam nec imperdiet sapien. In ac tortor tempus, luctus dolor a, consequat ligula.",
						star: 2,
					},
				],
			},
			{
				title: "Cowspiracy",
				author: "Kip Andresen e Keegan Kuhn",
				reviews: [
					{
						review:
							"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dictum et ante tempus convallis. Praesent bibendum condimentum efficitur. Integer vulputate sit amet eros vitae viverra. Fusce eget libero tempus, volutpat sem sed, porta quam. Etiam a enim nunc. Nullam nec imperdiet sapien. In ac tortor tempus, luctus dolor a, consequat ligula.",
						star: 5,
					},
				],
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
