const router = require("express").Router();
const User = require("../model/User");
const verify = require("./verifyToken");

router.get("/", verify, (req, res) => {
	res.send(req.user);
	//info solo da quell'utente
	User.findOne({ _id: req.user });
});

module.exports = router;
