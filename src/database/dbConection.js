import {MongoClient} from "mongodb";
import dotenv from "dotenv";

dotenv.config();
const mongoClient = new MongoClient(process.env.DATABASE_URL);
try {
	await mongoClient.connect()
	console.log("Database successfully connected.")
} 
catch (error) {
	(error) => console.log(error.message)
};
export const db = mongoClient.db();