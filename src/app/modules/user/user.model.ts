import { Schema, model } from "mongoose";
import { Tuser, TuserModel } from "./user.interface";
import bcrypt from 'bcrypt';
import { config } from "../../config";

// TuserModel is for custom methods
// Tuser is for the schema definition
const userSchema = new Schema<Tuser, TuserModel>(
  {
    // id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, required: true, default: "user" },
    status: {type: String, required: true, default: "active"}, // active | blocked
    isBlocked: { type: Boolean, required: false, default: false },
    isDeleted: { type: Boolean, required: false, default: false },
  },
  { timestamps: true }
);



userSchema.statics.checkUserExistsByEmail = async function (email: string) {
  console.log(this)
  return this.findOne({ email });
};

userSchema.pre("save", async function (next) {
  const user = this;
  user.password = await await bcrypt.hash(
    user.password, Number(config.bcrypt_salt_rounds)
  );
});

userSchema.statics.isPasswordMatched = async function (
  plainTextPassword,
  hashedPassword,
) {
  return await bcrypt.compare(plainTextPassword, hashedPassword);
};





export const User = model<Tuser, TuserModel>(
  "Users",
  userSchema,
  "userCollection"
);
