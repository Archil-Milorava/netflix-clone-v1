import mongoose from "mongoose";

const connectDB = async () => {
    if (!process.env.MONGO_URI) {
        console.error("MONGO_URI is not defined in the environment variables.");
        process.exit(1); 
    }

    try {
        const connect = await mongoose.connect(process.env.MONGO_URI);
        console.log(`Connected to DB`);
    } catch (error) {
        console.error(`Error during connecting DB: ${error.message}`);
        process.exit(1); 
    }
};

export default connectDB;
