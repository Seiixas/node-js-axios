import 'express-async-errors';

import express, { NextFunction, Request, Response } from 'express';
import { AppError } from './errors/AppError';
import { profileRoutes } from './routes/profile.routes';
import cors from 'cors';
import { pokemonRoutes } from './routes/pokemon.routes';

const app = express();

app.use(cors());

app.use(express.json());

app.use(profileRoutes);
app.use(pokemonRoutes);

app.use(
  (
    err: Error,
    request: Request,
    response: Response,
    next: NextFunction
  ): Response => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        error: err.message,
      });
    }

    return response.status(500).json({
      status: 'error',
      message: `Internal server error - ${err.message}`,
    });
  }
);

app.listen(3333, () => {
  console.log('Back-end is now running')
})