import { Server } from "http";
import app from "./app";
import dotenv from "dotenv";

import mongoose from "mongoose";
dotenv.config(); // Load environment variables

const PORT = 3000;
let server: Server;

const uri: any = process.env.DATABASE_URL;


async function connectDB() {
  try {
    await mongoose.connect(uri);
    console.log("✅ Connected to MongoDB successfully!");
  } catch (err) {
    console.error("❌ MongoDB connection failed:", err);
    process.exit(1); // Optional: shut down app on failure
  }
}





async function bootstrap() {
  await connectDB(); // Ensure the database connects before starting the server

  server = app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
  });
}

bootstrap();
