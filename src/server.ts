import { Server } from "http";
import app from "./app";
import dotenv from "dotenv";

import mongoose from "mongoose";
import { config } from "./app/config";
dotenv.config(); // Load environment variables

const PORT = config.port;
let server: Server;

const uri: any = config.db_url; // MongoDB connection string


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


process.on("unhandledRejection", (error) => {
  console.error("Unhandled Rejection:", error);
  if (server) {
    server.close(() => {
      process.exit(1); // Exit process with failure
    });
  } 
})

process.on("uncaughtException", (error) => {
  console.error(`👻 unhandled rejection detected, shutting down server ...`, error);
  if (server) {
    server.close(() => {
      process.exit(1); // Exit process with failure
    });
  }
})