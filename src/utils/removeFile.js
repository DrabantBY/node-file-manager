import { resolve } from 'path';
import { unlink } from 'fs/promises';
import { error } from './showMessage.js';

const removeTargetFile = async ([file]) => {
  try {
    const targetFile = resolve(file);
    await unlink(targetFile);
  } catch {
    error();
  }
};

export default removeTargetFile;
