import { resolve } from 'path';
import { open } from 'fs/promises';
import { error } from './showMessage.js';

const createNewFile = async ([file]) => {
  try {
    const targetFile = resolve(file);
    await open(targetFile, 'wx');
  } catch {
    error();
  }
};

export default createNewFile;
