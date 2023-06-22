import { resolve, dirname } from 'path';
import { rename } from 'fs/promises';
import { error } from './showMessage.js';

const renameFile = async ([targetFile, newFileName]) => {
  try {
    const targetPath = resolve(targetFile);
    const targetFolder = dirname(targetPath);
    const newFilePath = resolve(targetFolder, newFileName);
    await rename(targetPath, newFilePath);
  } catch {
    error();
  }
};

export default renameFile;
