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
import { validateMongoId, validateBody } from '../middlewares/index.js';
import { createStudentSchema } from '../validation/createStudentSchema.js';
import { updateStudentSchema } from '../validation/updateStudentSchema.js';
import { authenticate } from '../middlewares/authenticate.js';
import { checkChildPermission } from '../middlewares/checkChildPermission.js';

const studentsRouter = Router();

studentsRouter.use('/:studentId', validateMongoId('studentId'));

studentsRouter.use('/', authenticate);

studentsRouter.get('/', ctrlWrapper(getAllStudentsController));

studentsRouter.get('/:studentId', ctrlWrapper(getStudentByIdController));

studentsRouter.post(
  '/',
  validateBody(createStudentSchema),
  ctrlWrapper(createStudentController),
);

studentsRouter.delete('/:studentId', ctrlWrapper(deleteStudentController));

studentsRouter.put(
  '/:studentId',
  validateBody(createStudentSchema),
  ctrlWrapper(upsertStudentController),
);

studentsRouter.patch(
  '/:studentId',
  checkChildPermission('teacher', 'parent'),
  validateBody(updateStudentSchema),
  ctrlWrapper(patchStudentController),
);

export default studentsRouter;
