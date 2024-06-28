import Joi from 'joi';

export const registerUserSchema = Joi.object({
  name: Joi.string().required().min(2).max(20),
  email: Joi.string().required().email(),
  password: Joi.string().required().min(6).max(32),
  role: Joi.string().valid('parent', 'teacher'),
});
