import { ZodError, ZodIssueCode } from "zod";
import {
  TErrorSources,
  TGenericErrorResponse,
} from "../middlewares/globalErroHandler";
import mongoose from "mongoose";
// type ZodIssue = ZodError['issues'][number];
// // ✅ type-safe alias for ZodIssue
// const handleZodError = (error: ZodError) => {
//     const errorSources: TErrorSources = error.issues.map(issue: ZodIssue)
// }

type ZodIssue = ZodError["issues"][number]; // ✅ type-safe alias for ZodIssue

export const handleZodError = (err: ZodError): TGenericErrorResponse => {
  const errorSources: TErrorSources = err.issues.map((issue: ZodIssue) => {
    return {
      path: issue?.path[issue.path.length - 1], // ✅ last segment
      message: issue.message,
    };
  });

  const statusCode = 400;

  return {
    statusCode,
    message: "Validation Error",
    errorSources,
  };
};

export const handleValidationError = (
  err: mongoose.Error.ValidationError
): TGenericErrorResponse => {
  const errorSources: TErrorSources = Object.values(err.errors).map(
    (val: mongoose.Error.ValidatorError | mongoose.Error.CastError) => {
      return {
        path: val.path,
        message: val?.message
      }
    }
  );
  const statusCode = 400;

  return {
    statusCode,
    message: 'Validation Error',
    errorSources,
  };
};
