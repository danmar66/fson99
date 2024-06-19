import Joi from 'joi';

export const createStudentSchema = Joi.object({
  name: Joi.string().required().min(2).max(20).messages({
    'string.base': 'Name must be a string',
    'string.min': 'Name must be at least 2 symbols',
    'string.max': 'Name must be less than 20 symbols',
    'any.required': 'Name is required',
  }),
  //   email: Joi.string().required().email(),
  age: Joi.number().integer().required().min(18),
  gender: Joi.string().required().valid('male', 'female', 'other'),
  avgMark: Joi.number().required().min(2).max(12),
  onDuty: Joi.boolean(),
});

/*
const data = {
  email: 'marchenkodanil97@gmail.com',
  name: 'Daniel',
  age: 27,
  gender: 'male',
  avgMark: 10.2,
};

/*
validate(data, { convert: false });
вказувати для того, щоб не приводити до вказаних в схемі типів

const validationResult = createStudentShema.validate(data, {
  abortEarly: false,
});

if (validationResult.error) {
  console.error(validationResult.error.message);
} else {
  console.log('Data is valid');
}
*/
