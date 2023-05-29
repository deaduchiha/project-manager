import mongoose from "mongoose";

const connectDB = async () => {
  try {
    // check mongoDb is connected
    if (mongoose.connection.readyState === 1) return;

    mongoose.set("strictQuery", false);
    await mongoose.connect(process.env.MONGO_URI || "");
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
