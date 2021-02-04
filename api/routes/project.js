const router = require("express").Router();
// const User = require("../model/User");
//const verify = require("./verifyToken");
const Project = require("../model/Project");
const Ammount = require("../model/Ammount");

// router.get("/", verify, (req, res) => {
// 	res.send(req.user);
// 	//info solo da quell'utente
// 	User.findOne({ _id: req.user });
// });

//Create new project
router.post("/add", async (req, res) => {
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

//Get all the project
router.get("/", async (req, res) => {
	try {
		const projects = await Project.find();
		res.json(projects);
	} catch (error) {
		res.json({ message: error });
	}
});

//get specific project
router.get("/:projectId", async (req, res) => {
	try {
		const project = await Project.findById(req.params.projectId);
		res.json(project);
	} catch (error) {
		res.json({ message: error });
	}
});

//delete specific project
router.delete("/:projectId", async (req, res) => {
	try {
		const removedProject = await Project.remove({ _id: req.params.projectId });
		res.json(removedProject);
	} catch (error) {
		res.json({ message: error });
	}
});

//Update specifi project

// update DESCRIPTION
router.patch("/:projectId", async (req, res) => {
	try {
		const updatedProject = await Project.updateOne(
			{
				_id: req.params.projectId,
			},
			{ $set: { description: req.body.description } }
		);
		res.json(updatedProject);
	} catch (error) {
		res.json({ message: error });
	}
});

// update NAME
router.patch("/:projectId", async (req, res) => {
	try {
		const updatedProject = await Project.updateOne(
			{
				_id: req.params.projectId,
			},
			{ $set: { description: req.body.name } }
		);
		res.json(updatedProject);
	} catch (error) {
		res.json({ message: error });
	}
});

//Create new ammount

router.patch("/add/:projectId", async (req, res) => {
	try {
		const updatedAmmount = await Project.updateOne(
			{
				_id: req.params.projectId,
			},
			{
				$push: {
					ammounts: { category: req.body.category, value: req.body.value },
				},
			}
		);
		res.json(updatedAmmount);
	} catch (error) {
		res.json({ message: error });
	}
});

module.exports = router;
