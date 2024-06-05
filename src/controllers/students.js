import { getAllStudents, getStudentById } from '../services/students.js';
import createHttpError from 'http-errors';

export const getAllStudentsController = async (req, res) => {
  const students = await getAllStudents();

  res.status(200).json({
    data: students,
  });
};

export const getStudentByIdController = async (req, res, next) => {
  const { studentId } = req.params;
  const student = await getStudentById(studentId);

  if (!student) {
    // throw new Error('Student not found');
    next(createHttpError(404, `Student with id ${studentId} not found`));
    return;
  }

  res.status(200).json({
    status: 200,
    message: `Students found with id ${studentId}`,
    data: student,
  });
};
