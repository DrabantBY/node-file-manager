import { resolve } from 'path';
import { unlink } from 'fs/promises';
import { error } from './showMessage.js';

const removeFile = async ([file]) => {
  try {
    const targetFile = resolve(file);
    await unlink(targetFile);
  } catch {
    error();
  }
};

export default removeFile;
