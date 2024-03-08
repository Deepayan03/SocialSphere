import { Request, Response } from "express";
import { NextFunction } from "express-serve-static-core";

export const catchAsyncError = (passedFunction:any) => (req:Request, res:Response, next:NextFunction) => {
  Promise.resolve(passedFunction(req, res, next)).catch(error => {
    const errorMessage = "Internal Server Error";
    console.error(`${errorMessage}: ${error.message}`);
    res.status(500).json({ error: `${errorMessage}: ${error.message}` });
  });
};
