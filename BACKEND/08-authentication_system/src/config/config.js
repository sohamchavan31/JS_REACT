import dotenv from "dotenv"

dotenv.config();  

if(!process.env.MONGO_URI){
    throw new Error("MONGO_URI is not defined in environment variable")
}

if(!process.env.JWT_KEY){
    throw new Error("JWT_KEY is not defined in environment variable")
}

const config = {
    MONGO_URI: process.env.MONGO_URI,
    JWT_KEY: process.env.JWT_KEY
}

export default config;