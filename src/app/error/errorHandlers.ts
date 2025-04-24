import { ZodError, ZodIssueCode } from "zod"
import { TErrorSources, TGenericErrorResponse } from "../middlewares/globalErroHandler"



// type ZodIssue = ZodError['issues'][number]; 
// // ✅ type-safe alias for ZodIssue
// const handleZodError = (error: ZodError) => {
//     const errorSources: TErrorSources = error.issues.map(issue: ZodIssue)
// }


type ZodIssue = ZodError['issues'][number]; // ✅ type-safe alias for ZodIssue

const handleZodError = (err: ZodError): TGenericErrorResponse => {
  const errorSources: TErrorSources = err.issues.map((issue: ZodIssue) => {
    return {
      path: issue?.path[issue.path.length - 1], // ✅ last segment
      message: issue.message,
    };
  });

  const statusCode = 400;

  return {
    statusCode,
    message: 'Validation Error',
    errorSources,
  };
};

export default handleZodError;