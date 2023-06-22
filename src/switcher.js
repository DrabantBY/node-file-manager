import validateLine from './utils/validateLine.js';
import showFilesList from './utils/showFilesList.js';
import moveToFolder from './utils/moveToFolder.js';
import showOsData from './utils/showOsData.js';
import readTargetFile from './utils/readTargetFile.js';
import createNewFile from './utils/createNewFile.js';
import removeTargetFile from './utils/removeFile.js';
import renameFile from './utils/renameFile.js';
import copyFile from './utils/copyFile.js';

import getHashFile from './utils/getHashFile.js';
import compressFile from './utils/compressFile.js';

import * as showMessage from './utils/showMessage.js';

const parseLine = async (line) => {
  let [point, ...data] = line.trim().split(/\s+/);

  const isValid = validateLine(point, data);

  if (isValid) {
    data.length && (data = data.map((str) => str.replaceAll('*', ' ')));

    switch (point) {
      case 'up':
        process.chdir('..');
        break;

      case 'ls':
        await showFilesList();
        break;

      case 'cd':
        moveToFolder(data);
        break;

      case 'os':
        showOsData(data);
        break;

      case 'cat':
        readTargetFile(data);
        break;

      case 'add':
        await createNewFile(data);
        break;

      case 'rm':
        await removeTargetFile(data);
        break;

      case 'hash':
        getHashFile(data);
        break;

      case 'rn':
        await renameFile(data);
        break;

      case 'cp':
        await copyFile(data);
        break;

      //   case 'mv':
      //     await moveFileToFolder(data);
      //     break;

      case 'compress':
        await compressFile(data, point);
        break;

      case 'decompress':
        await compressFile(data, point);
        break;

      case '.exit':
        process.exit();
    }
  } else {
    showMessage.wrong();
  }

  showMessage.folder();
};

export default parseLine;
