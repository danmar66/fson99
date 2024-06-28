import path from 'path';

export const ENV_VARS = {
  PORT: 'PORT',
  JWT_SECRET: 'JWT_SECRET',
  FRONTEND_HOST: 'FRONTEND_HOST',
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
