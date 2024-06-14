import { Router } from 'express';
import {
  createStudentController,
  deleteStudentController,
  getAllStudentsController,
  getStudentByIdController,
  patchStudentController,
  upsertStudentController,
} from '../controllers/students.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import validateMongoId from '../middlewares/validateMongoId.js';
import { validateBody } from '../middlewares/validateBody.js';
import { createStudentShema } from '../validation/createStudentSchema.js';
import { updateStudentShema } from '../validation/updateStudentSchema.js';

const router = Router();

router.use('/students/:studentId', validateMongoId('studentId'));

router.get('/students', ctrlWrapper(getAllStudentsController));

router.get('/students/:studentId', ctrlWrapper(getStudentByIdController));

router.post(
  '/students',
  validateBody(createStudentShema),
  ctrlWrapper(createStudentController),
);

router.delete('/students/:studentId', ctrlWrapper(deleteStudentController));

router.put(
  '/students/:studentId',
  validateBody(createStudentShema),
  ctrlWrapper(upsertStudentController),
);

router.patch(
  '/students/:studentId',
  validateBody(updateStudentShema),
  ctrlWrapper(patchStudentController),
);

export default router;
