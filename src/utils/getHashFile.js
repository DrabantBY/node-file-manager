import { createReadStream } from 'fs';
import { createHash } from 'crypto';
import { resolve } from 'path';
import { error } from './showMessage.js';

const getHashFile = async ([file]) => {
  const targetFile = resolve(file);
  const readStream = createReadStream(targetFile);
  const hash = createHash('sha256').setEncoding('hex');
  readStream.pipe(hash).pipe(process.stdout);
  readStream.on('end', () => process.stdout.write('\n'));
  readStream.on('error', error);
};

export default getHashFile;
