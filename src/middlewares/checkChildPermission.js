import createHttpError from 'http-errors';
import { StudentsCollection } from '../db/models/student.js';

export const checkChildPermission =
  (...roles) =>
  async (req, res, next) => {
    const user = req.user;
    const { studentId } = req.params;

    if (roles.includes('teacher') && user.role === 'teacher') {
      return next();
    }

    if (roles.includes('parent') && user.role === 'parent') {
      const student = await StudentsCollection.findOne({
        _id: studentId,
        parentId: user._id,
      });

      if (!student) {
        return next(createHttpError(403, 'This is not your child'));
      }

      return next();
    }

    return next(createHttpError(403, 'Forbidden'));
  };

/*
  export const checkChildPermission =
  (...roles) =>
  async (req, res, next) => {
    const teacherCheckStrategy = () => next();
    const parentCheckStrategy = async () => {
      const student = await StudentsCollection.findOne({
        _id: studentId,
        parentId: user._id,
      });

      if (!student) {
        return next(createHttpError(403, 'This is not your child'));
      }

      return next();
    };

    const strategyMapper = {
      parent: parentCheckStrategy,
      teacher: teacherCheckStrategy,
    };

    const user = req.user;
    const { studentId } = req.params;

    if (!roles.includes(user.role)) {
      return next(createHttpError(403, 'Forbidden'));
    }

    const strategy = strategyMapper[user.role];

    if (!strategy) {
      return next(createHttpError(403, 'Forbidden'));
    }

    await strategy();
  };
*/
