import mongoose from "mongoose";
import config from "./config.js"

async function connectDB() {
    try {
        await mongoose.connect(config.MONGO_URI)
        console.log("connected to db");
    } catch (err) {
        console.error("failed to connect to db:", err.message);
        process.exit(1);
    }
}

export default connectDB;