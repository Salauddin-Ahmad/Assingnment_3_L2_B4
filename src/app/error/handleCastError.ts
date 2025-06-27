import mongoose from "mongoose";
import {
  TErrorSources,
  TGenericErrorResponse,
} from "../middlewares/globalErroHandler";

const handleCastError = (
  err: mongoose.Error.CastError
): TGenericErrorResponse => {
  const errorSources: TErrorSources = [
    {
      path: err.path || "Unknown path",
      message: err.message || "Unknown message",
    },
  ];

  const statusCode = 400; // Bad Request
  return {
    statusCode,
    message: "Invalid ID",
    errorSources,
  };
};


export default handleCastError;