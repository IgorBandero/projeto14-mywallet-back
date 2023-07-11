import {db} from "../database/dbConection.js";
import bcrypt from "bcrypt";


export async function createUser(req, res){
    const {name, email, password} = req.body;

    try{
        const newUser = await db.collection("users").findOne({email});
        if (newUser){
            return res.sendStatus(409);
        }
        const hash = bcrypt.hashSync(password, 10);
        await db.collection("users").insertOne({name, email, password: hash});
        res.sendStatus(201);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
}

export async function joinSession(req, res){
    const {email, password} = req.body;
    console.log(email);
    console.log(password);
}
