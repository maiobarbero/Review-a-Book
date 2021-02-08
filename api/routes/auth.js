const router = require("express").Router();
const User = require("../model/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { registerValidation, loginValidation } = require("../validation");

//Register

router.post("/register", async (req, res) => {
	//Validate data before make user
	const { error } = registerValidation(req.body);
	if (error) return res.status(400).send(error.details[0].message);

	//Check if User already in DB
	const emailExist = await User.findOne({ email: req.body.email });
	if (emailExist) return res.status(400).send("Email already in our database");

	//Hash pwd
	const salt = await bcrypt.genSalt(10);
	const hashPwd = await bcrypt.hash(req.body.password, salt);

	//Create new User
	const user = new User({
		name: req.body.name,
		email: req.body.email,
		password: hashPwd,
	});
	try {
		const savedUser = await user.save();
		res.send({ user: user._id });
	} catch (err) {
		res.status(400).send(err);
	}
});

//Login

router.post("/login", async (req, res) => {
	//Validate data before login user
	const { error } = loginValidation(req.body);
	if (error) return res.status(400).send(error.details[0].message);

	//Check if email is already in DB
	const user = await User.findOne({ email: req.body.email });
	if (!user) return res.status(400).send("Wrong email");

	// Check password
	const validPwd = await bcrypt.compare(req.body.password, user.password);
	if (!validPwd) return res.status(400).send("Wrong password");

	//Json webtoken
	const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
	res.header("auth-token", token).send(token);
});

router.get("/:userId", async (req, res) => {
	try {
		const user = await User.find({ _id: req.params.userId });
		res.json(user);
	} catch (error) {
		res.status(400).send(error);
	}
});

module.exports = router;
