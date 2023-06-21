import buildPathFile from './buildPathFile.js';
import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';
import { createBrotliCompress, createBrotliDecompress } from 'zlib';
import { error } from './showMessage.js';

export const compressFile = async (paths, flag) => {
  try {
    let [sourceFile, targetFile] = buildPathFile(paths);
    let zip;

    if (flag === 'compress') {
      zip = createBrotliCompress();
    }

    if (flag === 'decompress') {
      zip = createBrotliDecompress();
    }

    const readStream = createReadStream(sourceFile);
    const writeStream = createWriteStream(targetFile);
    await pipeline(readStream, zip, writeStream);
  } catch {
    error();
  }
};

export default compressFile;
