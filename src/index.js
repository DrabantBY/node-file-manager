import { createInterface } from 'readline/promises';
import { homedir } from 'os';
import parseLine from './switcher.js';
import getUserName from './utils/getUserName.js';
import * as showMessage from './utils/showMessage.js';

const userName = getUserName();

if (userName) {
  process.chdir(homedir());

  showMessage.hello(userName);
  showMessage.folder();

  const readLine = createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  readLine.on('line', parseLine);
  readLine.on('SIGINT', process.exit);

  process.on('exit', () => showMessage.bye(userName));
  process.on('error', () => showMessage.error());
} else {
  showMessage.error();
}
