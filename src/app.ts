import cookieParser from 'cookie-parser';
import cors from 'cors';
import express, { Request, Response, NextFunction, Application } from 'express';
import router from './app/routes';

const app: Application = express();

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: '*',credentials: true  })); //enable cookies 


// Middleware to log requests
app.use((req, res, next) => {
  console.log(`${req.method} request to ${req.url}`);
  next();
});

app.use('/api/', router)

// Simple GET API

// Enhanced GET API with JSON Response and Query Params
app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: 'Hello World!',
  });
});

app

app.use('*', (req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: 'Route Not Found',
  });
});

// Error Handling Middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: "Internal Server Error",
  });
});

export default app;
