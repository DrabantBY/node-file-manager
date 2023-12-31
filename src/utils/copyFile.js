import { createReadStream, createWriteStream } from 'fs';
import { access } from 'fs/promises';
import { pipeline } from 'stream/promises';
import { error } from './showMessage.js';
import buildPathFile from './buildPathFile.js';

const copyFile = async (paths) => {
  try {
    const [sourceFile, targetFile] = buildPathFile(paths);
    await access(sourceFile);
    const readStream = createReadStream(sourceFile);
    const writeStream = createWriteStream(targetFile);
    await pipeline(readStream, writeStream);
  } catch {
    error();
  }
};

export default copyFile;
