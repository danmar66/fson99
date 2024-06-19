import Joi from 'joi';

export const updateStudentSchema = Joi.object({
  name: Joi.string().min(2).max(20).messages(),
  age: Joi.number().integer().min(18),
  gender: Joi.string().valid('male', 'female', 'other'),
  avgMark: Joi.number().min(2).max(12),
  onDuty: Joi.boolean(),
});
