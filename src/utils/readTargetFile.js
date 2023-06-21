import { createReadStream } from 'fs';
import { resolve } from 'path';
import { error } from './showMessage.js';

export const readTargetFile = ([file]) => {
  const targetFile = resolve(file);
  const readStream = createReadStream(targetFile);
  readStream.pipe(process.stdout);
  readStream.on('end', console.log);
  readStream.on('error', error);
};

export default readTargetFile;
