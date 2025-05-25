import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

export const config = {
  node_env: process.env.NODE_ENV,
  port: process.env.PORT || 3000,
  db_url: process.env.DATABASE_URL,
  jwt_refresh_secret: process.env.JWT_REFRESH_SECRET,
  jwt_refresh_expires_in: process.env.JWT_REFRESH_EXPIRES_IN,
  jwt_access_secret: process.env.JWT_ACCESS_SECRET,
  jwt_access_expires_in: process.env.JWT_ACCESS_EXPIRES_IN,
  bcrypt_salt_rounds: process.env.BCRYPT_SALT_ROUNDS,
};
