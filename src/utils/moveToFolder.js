import { resolve, parse } from 'path';
import { error } from './showMessage.js';

const moveToFolder = ([folder]) => {
  try {
    const isRoot = folder.endsWith(':') && folder.length === 2;
    const targetPath = resolve(folder);
    const targetFolder = isRoot ? parse(targetPath).root : targetPath;
    process.chdir(targetFolder);
  } catch {
    error();
  }
};

export default moveToFolder;
