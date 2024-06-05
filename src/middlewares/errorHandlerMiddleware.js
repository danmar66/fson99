// import { HttpError } from 'http-errors';
import { isHttpError } from 'http-errors';
import { MongooseError } from 'mongoose';

const errorHandlerMiddleware = (err, req, res, next) => {
  // Variant 1 - check error instance
  // if (err instanceof HttpError) {
  if (isHttpError(err)) {
    res.status(err.status).json({
      status: err.status,
      message: err.message,
      data: err,
    });
    return;
  }

  if (err instanceof MongooseError) {
    res.status(500).json({
      status: err.status,
      message: 'Mongoose error',
    });
    return;
  }

  res.status(500).json({
    message: 'Something went wrong',
    error: err.message,
  });
};

export default errorHandlerMiddleware;
