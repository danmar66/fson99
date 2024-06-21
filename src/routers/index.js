import { Router } from 'express';
import authRouter from './auth.js';
import studentsRouter from './students.js';

const rootRouter = Router();

rootRouter.use('/auth', authRouter);
rootRouter.use('/students', studentsRouter);

export default rootRouter;
