import mongoose from "mongoose";


const connectDB = async () => {
  try {
     const connect =   await mongoose.connect(process.env.MONGO_URI)
     console.log("connected to DB");
     
  } catch (error) {
    console.log(`error during connecting DB`, error);
    process.exit(1)
  }
};


export default connectDB