import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import connectDB from './config/db.js';

import userRoutes from './routes/userRoutes.js';

dotenv.config();

connectDB();

const app = express();

app.use('/api/users', userRoutes);
