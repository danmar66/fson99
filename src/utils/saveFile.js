import { ENV_VARS } from '../constants/index.js';
import { env } from './env.js';
import { saveFileToCloudinary } from './saveFileToCloudinary.js';
import { saveFileToLocalMachine } from './saveFileToLocalMachine.js';

export const saveFile = async (file) => {
  let url;

  const isCloudinary = env(ENV_VARS.IS_CLOUDINARY_ENABLED);

  if (isCloudinary === 'true') {
    url = await saveFileToCloudinary(file);
  } else {
    url = saveFileToLocalMachine(file);
  }

  return url;
};
