import mongoose from "mongoose";
import { MONGO_URI } from "../env.js";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log(`mongo db connected ${conn.connection.host}`);
  } catch (err) {
    console.log("failed to connect to mongo:", err);
    process.exit(1);
  }
};

export default connectDB;
