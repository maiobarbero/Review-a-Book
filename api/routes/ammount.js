const router = require("express").Router();
const Ammount = require("../model/Project");

//Create new ammount
router.post("/add/:projectID/ammount", async (req, res) => {
	const ammount = new Ammount({
		category: req.body.name,
		value: req.body.description,
	});
	try {
		const savedAmmount = await ammount.save();
		res.send(savedAmmount);
	} catch (error) {
		res.status(400).send(error);
	}
});

// //Get all the project
// router.get("/", async (req, res) => {
// 	try {
// 		const projects = await Project.find();
// 		res.json(projects);
// 	} catch (error) {
// 		res.json({ message: error });
// 	}
// });

// //get specific project
// router.get("/:projectId", async (req, res) => {
// 	try {
// 		const project = await Project.findById(req.params.projectId);
// 		res.json(project);
// 	} catch (error) {
// 		res.json({ message: error });
// 	}
// });

// //delete specific project
// router.delete("/:projectId", async (req, res) => {
// 	try {
// 		const removedProject = await Project.remove({ _id: req.params.projectId });
// 		res.json(removedProject);
// 	} catch (error) {
// 		res.json({ message: error });
// 	}
// });

// //Update specifi project

// // update DESCRIPTION
// router.patch("/:projectId", async (req, res) => {
// 	try {
// 		const updatedProject = await Project.updateOne(
// 			{
// 				_id: req.params.projectId,
// 			},
// 			{ $set: { description: req.body.description } }
// 		);
// 		res.json(updatedProject);
// 	} catch (error) {
// 		res.json({ message: error });
// 	}
// });

// // update NAME
// router.patch("/:projectId", async (req, res) => {
// 	try {
// 		const updatedProject = await Project.updateOne(
// 			{
// 				_id: req.params.projectId,
// 			},
// 			{ $set: { description: req.body.name } }
// 		);
// 		res.json(updatedProject);
// 	} catch (error) {
// 		res.json({ message: error });
// 	}
// });
module.exports = router;
