import createHttpError from 'http-errors';
import { isValidObjectId } from 'mongoose';

const validateMongoId =
  (idName = 'id') =>
  (req, res, next) => {
    const id = req.params[idName];

    if (!isValidObjectId(id)) {
      next(createHttpError(400, 'Invalid ID! Please specify correct data'));
    }

    next();
  };

export default validateMongoId;
