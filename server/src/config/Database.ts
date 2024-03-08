import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const URI: string | undefined = process.env.MONGO_URI;

if (!URI) {
    console.error("Mongo URI is not provided.");
    process.exit(1);
}

const connectDB = async (): Promise<void> => {
    try {
        await mongoose.connect(URI);
        console.log("Connection successful");
    } catch (error) {
        console.error("Problem connecting to the database: ", error);
        process.exit(1);
    }
};

export default connectDB;
