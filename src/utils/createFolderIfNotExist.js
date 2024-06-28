import fs from 'fs/promises';

export const createFolderIfNotExist = async (path) => {
  try {
    await fs.access(path);
  } catch (error) {
    if (error.code === 'ENOENT') {
      await fs.mkdir(path);
    }
  }
};
