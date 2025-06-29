import { model, Schema } from "mongoose";
import { Tblog } from "./blog.interface";

const blogModel = new Schema<Tblog>(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: {
      type: Schema.Types.ObjectId,
      ref: "Users", // Assuming you have a Users model for authors
      required: true,
    },
    isPublished: { type: Boolean, required: true },
  },
  { timestamps: true }
);

export const blogCollection = model<Tblog>(
  "Blogs",
  blogModel,
  "blogCollection"
);
