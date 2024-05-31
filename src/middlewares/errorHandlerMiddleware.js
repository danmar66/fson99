const errorHandlerMiddleware = (err, req, res, next) => {
  res.status(500).json({
    message: 'Something went wrong',
    error: err.message,
  });
};

export default errorHandlerMiddleware;
