import mongoose from "mongoose";

const connectDB = async () =>{
  await mongoose.connect(process.env.MONGO_URI, {
    dbName: process.env.DB_NAME,
  });
  console.log("MongoDB Connected");

}

export default connectDB