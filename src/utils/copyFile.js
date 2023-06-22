import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';
import { error } from './showMessage.js';
import buildPathFile from './buildPathFile.js';

const copyFile = async (paths) => {
  try {
    const [sourceFile, targetFile] = buildPathFile(paths);
    const readStream = createReadStream(sourceFile);
    const writeStream = createWriteStream(targetFile);
    await pipeline(readStream, writeStream);
  } catch {
    error();
  }
};

export default copyFile;
