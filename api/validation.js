const Joi = require("@hapi/joi");

const registerValidation = (data) => {
	const schema = Joi.object({
		name: Joi.string().required().min(3),
		email: Joi.string().email().required(),
		password: Joi.string().min(6).required(),
	});
	return schema.validate(data);
};

const loginValidation = (data) => {
	const schema = Joi.object({
		email: Joi.string().email().required(),
		password: Joi.string().min(6).required(),
	});
	return schema.validate(data);
};

const starValidation = (data) => {
	const schema = Joi.object({
		name: Joi.string(),
		author: Joi.string(),
		review: Joi.string(),
		star: Joi.number().integer().min(0).max(5),
	});
	return schema.validate(data);
};
module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
module.exports.starValidation = starValidation;
