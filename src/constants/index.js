import path from 'path';

export const ENV_VARS = {
  PORT: 'PORT',
  JWT_SECRET: 'JWT_SECRET',
  FRONTEND_HOST: 'FRONTEND_HOST',
  BACKEND_HOST: 'BACKEND_HOST',
  IS_CLOUDINARY_ENABLED: 'IS_CLOUDINARY_ENABLED',
};

export const MONGO_VARS = {
  MONGO_DB_USER: 'MONGO_DB_USER',
  MONGO_DB_PASSWORD: 'MONGO_DB_PASSWORD',
  MONGO_DB_URI: 'MONGO_DB_URI',
  MONGO_DB_COLLECTION: 'MONGO_DB_COLLECTION',
};

export const SORT_ORDER = {
  ASC: 'asc',
  DESC: 'desc',
};

export const EMAIL_VARS = {
  SMTP_HOST: 'SMTP_HOST',
  SMTP_PORT: 'SMTP_PORT',
  SMTP_USER: 'SMTP_USER',
  SMTP_PASS: 'SMTP_PASS',
  SMTP_FROM: 'SMTP_FROM',
};

export const TEMPLATES_DIR = path.join(process.cwd(), 'src', 'templates');
export const TEMP_UPLOAD_DIR = path.join(process.cwd(), 'temp');
export const UPLOAD_DIR = path.join(process.cwd(), 'upload');

export const CLOUDINARY = {
  CLOUD_NAME: 'CLOUDINARY_CLOUD_NAME',
  API_KEY: 'CLOUDINARY_API_KEY',
  API_SECRET: 'CLOUDINARY_API_SECRET',
};
