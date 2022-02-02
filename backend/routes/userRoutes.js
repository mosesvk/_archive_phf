import express from 'express';
import {
  authUser,
  registerUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser, 
  getUserById, 
  updateUser
} from '../controllers/userCtrl.js';
const router = express.Router();

