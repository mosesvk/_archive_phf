import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import morgan from 'morgan';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import connectDB from './config/db.js';

import userRoutes from './routes/userRoutes.js';

dotenv.config();

connectDB();

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

//allows us to accept JSON data in the body
app.use(express.json());

app.use('/api/users', userRoutes);

//errorMiddleware.js
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5500;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold
  )
);