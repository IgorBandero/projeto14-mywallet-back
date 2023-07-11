import {schemaUser, schemaNewUser} from "../schemas/userSchema.js";

export function validateUser(req, res, next) {

    const validationUser = schemaUser.validate(req.body, {abortEarly: false});
    
    if (validationUser.error){
        return res.status(422).send(validationUser.error.details);
    }

    next();
}

export function validateNewUser(req, res, next) {

    const validationNewUser = schemaNewUser.validate(req.body, {abortEarly: false});
    
    if (validationNewUser.error){
        return res.status(422).send(validationNewUser.error.details);
    }

    next();
}


