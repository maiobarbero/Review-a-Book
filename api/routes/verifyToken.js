const jwt = require("jsonwebtoken");

//Middleware to add to routes that are private

module.exports = function (req, res, next) {
	const token = req.header("auth-token");
	if (!token) return res.status(401).send("Acces denied");

	try {
		const verified = jwt.verify(token, process.env.TOKEN_SECRET);
		req.user = verified;
		next();
	} catch (error) {
		res.status(400).send("Invalid token");
	}
};
