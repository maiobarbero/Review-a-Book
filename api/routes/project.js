const router = require("express").Router();
// const User = require("../model/User");
//const verify = require("./verifyToken");
const Project = require("../model/Project");

// router.get("/", verify, (req, res) => {
// 	res.send(req.user);
// 	//info solo da quell'utente
// 	User.findOne({ _id: req.user });
// });

//PROJECT

router.post("/add", async (req, res) => {
	//Create new project

	const project = new Project({
		name: req.body.name,
		description: req.body.description,
		ammounts: req.body.ammounts,
	});
	try {
		const savedProject = await project.save();
		res.send(savedProject);
	} catch (error) {
		res.status(400).send(error);
	}
});

module.exports = router;
