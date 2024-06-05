// import express from 'express';
import { Router } from 'express';
import {
  getAllStudentsController,
  getStudentByIdController,
} from '../controllers/students.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const router = Router();

// Second variant
// export const router = express.Router();

router.get('/students', ctrlWrapper(getAllStudentsController));

router.get('/students/:studentId', ctrlWrapper(getStudentByIdController));

export default router;
