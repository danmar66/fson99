import { TEMP_UPLOAD_DIR, UPLOAD_DIR } from './constants/index.js';
import { initMongoDB } from './db/initMongoDB.js';
import { startServer } from './server.js';
import { createFolderIfNotExist } from './utils/createFolderIfNotExist.js';

const bootstrap = async () => {
  await initMongoDB();
  await createFolderIfNotExist(TEMP_UPLOAD_DIR);
  await createFolderIfNotExist(UPLOAD_DIR);
  startServer();
};

bootstrap();
