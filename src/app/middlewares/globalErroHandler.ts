import { ZodError } from "zod";

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
    const zErrorSimplyfied = 
    
  }



}
