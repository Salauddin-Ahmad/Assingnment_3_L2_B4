import { Schema, model } from "mongoose";
import { Tuser, TuserModel } from "./user.interface";

// TuserModel is for custom methods
// Tuser is for the schema definition
const userSchema = new Schema<Tuser, TuserModel>(
  {
    // id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, required: true, default: "user" },
    isBlocked: { type: Boolean, required: false, default: false },
  },
  { timestamps: true }
);

userSchema.statics.checkUserExistsByEmail = async function (email: string) {
  return this.findOne({ email });
};

userSchema.pre("save", async function (next) {
  const user = this;
  console.log(user, "pre save hook called");
});

export const User = model<Tuser, TuserModel>(
  "Users",
  userSchema,
  "userCollection"
);
