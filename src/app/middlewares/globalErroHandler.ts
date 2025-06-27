import { ZodError } from "zod";
import { handleValidationError, handleZodError } from "../error/errorHandlers";
import handleCastError from "../error/handleCastError";

// import { NextFunction, Response, Request } from 'express';
export type TErrorSources = {
  path: string | number;
  message: string;
}[];

export type TGenericErrorResponse = {
  statusCode: number;
  message: string;
  errorSources: TErrorSources;
};

const globalErrorHandler = (error, Req, Res, Next) => {
  let errorSources: TErrorSources = [
    {
      path: "",
      message: "",
    },
  ];

  let statusCode = error.statusCode;
  let message = error.message;

  if(error instanceof ZodError) {
    const zErrorSimplyfied = handleZodError(error);
    statusCode = zErrorSimplyfied.statusCode;
    message = zErrorSimplyfied.message;
  } else if (error.name === "ValidationError") {
    const validationError = handleValidationError(error);
    statusCode = validationError.statusCode;
    message = validationError.message;
    errorSources = validationError.errorSources;

  } else if (error?.name === 'CastError') {
    const simplifiedError = handleCastError(error);
    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorSources = simplifiedError.errorSources;
  } else {
    const simplifiedError = 
    statusCode = error.statusCode || 500;
    message = error.message || "Internal Server Error";
    errorSources = 

}
