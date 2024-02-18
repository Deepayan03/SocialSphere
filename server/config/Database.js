import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config();
const URI = process.env.MONGO_URI;

export const connectDB = async()=>{
    try {
        await mongoose.connect(URI);
        console.log("Connection successful");
    } catch (error) {
        console.log("Problem to connect database" + error);
        process.exit(0);
    }
}