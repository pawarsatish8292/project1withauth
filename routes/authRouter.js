import express from "express";
const router = express.Router();
import {resigerUser, loginUser} from '../controllers/authController.js';

router.post('/',resigerUser);
router.post('/login',loginUser);

export default router;