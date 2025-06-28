import { ZodError } from "zod";
import { handleValidationError, handleZodError } from "../error/errorHandlers";
import handleCastError from "../error/handleCastError";
import AppError from "../error/AppError";
import {config} from "../config";

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

const globalErrorHandler = (error, req, res, next) => {
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
  } else if (error?.code === 11000) {
    const simplifiedError = 
    statusCode = error.statusCode || 500;
    message = error.message || "Internal Server Error";
    errorSources = simplifiedError.errorSources;
  } else if  (error instanceof AppError) {
    statusCode = error.statusCode || 500;
    message = error.message || "Internal Server Error";
    errorSources = [
      {
        path: '',
        message: error.message,
      }
    ]
  } else if (error instanceof Error) {
    message = error.message;
    errorSources = [
      {
        path: '',
        message: error.message,
      }
    ]
  } 


  res.status(statusCode).json({
    success: "false",
    message,
    errorSources,
    stack: config.node_env === "development" ? error.stack : undefined,
  });
  next(error)
}


export default globalErrorHandler;