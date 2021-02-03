const router = require("express").Router();
const User = require("../model/User");

//Validation
const Joi = require("@hapi/joi");

const schema = {
	name: Joi.string().required().min(3),
	email: Joi.string().email().required().unique(),
	password: Joi.string().min(6).required(),
};

router.post("/register", async (req, res) => {
	//Validate data before make user
	const { error } = Joi.validate(req.body, schema);
	if (error) return res.status(400).send(error.details[0].message);

	const user = new User({
		name: req.body.name,
		email: req.body.name,
		password: req.body.password,
	});
	try {
		const savedUser = await user.save();
		res.send(savedUser);
	} catch (err) {
		res.status(400).send(err);
	}
});

module.exports = router;
