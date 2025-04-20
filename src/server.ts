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
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    await mongoose.connect(uri);
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    await mongoose.disconnect();
  }
}



async function bootstrap() {
  await connectDB(); // Ensure the database connects before starting the server

  server = app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
  });
}

bootstrap();
