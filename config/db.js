import mongoose from "mongoose";

const connectDB = async (mongoUri, dbName) => {
  if (!mongoUri) {
    console.warn("MONGO_URI not set; starting server without MongoDB connection");
    return;
  }
  try {
    await mongoose.connect(mongoUri, {
      dbName: dbName,
    });
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
};

export default connectDB;
