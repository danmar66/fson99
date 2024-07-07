import fs from 'fs';
import swaggerUi from 'swagger-ui-express';
import { SWAGGER_PATH } from '../constants/index.js';
import createHttpError from 'http-errors';

export const swaggerDocs = () => {
  try {
    const swaggerDoc = JSON.parse(fs.readFileSync(SWAGGER_PATH).toString());
    return [...swaggerUi.serve, swaggerUi.setup(swaggerDoc)];
  } catch (error) {
    return (req, res, next) =>
      next(createHttpError(500, "Can't load swagger docs"));
  }
};
