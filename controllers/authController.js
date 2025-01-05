import { create, findByEmail } from "../models/userModel.js";
import { sendSuccess, sendError } from '../utils/response.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
dotenv.config();

export const resigerUser = async (req, res) => {
  let { name, email, password } = req.body;
  if (!name || !email || !password) return sendError(res, 'All fields are required', 400);
  const hashPassword = await bcrypt.hash(password, 10);
  try {
    let result = await create(name, email, hashPassword);
    sendSuccess(res, { id: result.insertId, name, email }, 'User register successfully', 201);
  } catch (error) {
    sendError(res, 'Error register user', 500);
  }
}

export const loginUser = async (req, res) => {
  let { email, password } = req.body;
  if (!email || !password) return sendError(res, 'All fields are required', 400);
  try {
    let users = await findByEmail(email);
    let user = users[0];
    if (!user || (!bcrypt.compare(password, user.password))) return sendError(res, 'Invalid email', 401);
    if (!bcrypt.compare(password, user.password)) return sendError(res, 'Invalid password', 401);
    const token = jwt.sign({ user_id: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
    sendSuccess(res, token, undefined, 200);
  } catch (error) {
    sendError(res, error, 500);
  }
}