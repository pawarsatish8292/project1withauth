import express from "express";
const router = express.Router();
import { addContent, getContentList, inactiveRecord} from '../controllers/recordController.js';
import { authenticateToken } from "../middlewares/authMiddleware.js";

router.use(authenticateToken);
router.post('/',addContent);
router.get('/',getContentList);
router.delete('/',inactiveRecord);

export default router;
