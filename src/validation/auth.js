import Joi from 'joi';

export const loginWithGoogleOAuthSchema = Joi.object({
  code: Joi.string().required(),
});
