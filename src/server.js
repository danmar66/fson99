import express from 'express';
import pino from 'pino-http';
import cors from 'cors';
import { env } from './utils/env.js';

// Second variant with
// export const router = express.Router();
// import { router } from './routers/students.js';

import studentsRouter from './routers/students.js';
import {
  notFoundMiddleware,
  errorHandlerMiddleware,
} from './middlewares/index.js';
import { ENV_VARS } from './constants/index.js';

const PORT = Number(env(ENV_VARS.PORT, '3000'));

export const startServer = () => {
  const app = express();

  app.use(express.json());
  app.use(cors());

  app.use(
    pino({
      transport: {
        target: 'pino-pretty',
      },
    }),
  );

  app.get('/', (req, res) => {
    res.json({
      message: 'Hello world!',
    });
  });

  app.use(studentsRouter);

  app.use(notFoundMiddleware);

  app.use(errorHandlerMiddleware);

  app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
  });
};
