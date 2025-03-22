import { Schema } from "mongoose";
import { Tblog } from "./blog.interface";

export const blogModel = new Schema<Tblog>(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: String, required: true },
    isPublished: { type: Boolean, required: true },
  },
  { timestamps: true }
);

