import { access, unlink } from 'fs/promises';
import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';
import { error } from './showMessage.js';
import buildPathFile from './buildPathFile.js';

const moveFile = async (paths) => {
  try {
    const [sourceFile, targetFile] = buildPathFile(paths);
    await access(sourceFile);
    const readStream = createReadStream(sourceFile);
    const writeStream = createWriteStream(targetFile);
    await pipeline(readStream, writeStream);
    await unlink(sourceFile);
  } catch {
    error();
  }
};

export default moveFile;
