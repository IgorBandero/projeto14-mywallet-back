import {db} from "../database/dbConection.js";
import bcrypt from "bcrypt";
import {v4 as uuid} from "uuid";


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

    try {
        const user = db.collection("users").findOne({email});
        if(!user){
            return res.status(404).send("User not found.");
        }
        else {
            if(bcrypt.compareSync(password, user.password)){
                const token = uuid();
                await db.collection("sessions").insertOne({token, userId: user._id});
                res.status(200).send({token, userName: user.name})
            }
            else {
                return res.status(401).send("Incorrect password.")
            }
        }
    }
    catch (error){
        res.status(500).send(error.message);
    }
}
