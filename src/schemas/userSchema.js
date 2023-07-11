import Joi from "joi";

export const schemaUser = Joi.object({
    password: Joi.string().required().min(3).max(200),
	email: Joi.string().required().email()	
});

export const schemaNewUser = Joi.object({
	name: Joi.string().required(),
    password: Joi.string().required().min(3),
	email: Joi.string().required().email()	
});

