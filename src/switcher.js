import validateLine from './utils/validateLine.js';
import showFilesList from './utils/showFilesList.js';
import moveToFolder from './utils/moveToFolder.js';
import showOsData from './utils/showOsData.js';

import getHashFile from './utils/getHashFile.js';

import * as showMessage from './utils/showMessage.js';
// import { getOsData } from './getOsData.js';
// import { wrong } from '../helpers/showMessage.js';
// import { currentDir } from '../helpers/showMessage.js';
// import { getFilesList } from './getFilesList.js';
// import { goToFolder } from './goToFolder.js';
// import { readTargetFile } from './readTargetFile.js';
// import { createNewFile } from './createNewFile.js';
// import { renameFile } from './renameFile.js';
// import { copyTargetFile } from './copyTargetFile.js';
// import { validateLineData } from '../helpers/validateLineData.js';
// import { getHashFile } from './getHashFile.js';
// import { removeTargetFile } from './removeTargetFile.js';
// import { moveFileToFolder } from './moveFileToFolder.js';
// import { handleCompressFile } from './handleCompressFile.js';

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

      //   case 'cat':
      //     readTargetFile(data);
      //     break;

      //   case 'add':
      //     await createNewFile(data);
      //     break;

      //   case 'rm':
      //     await removeTargetFile(data);
      //     break;

      case 'hash':
        await getHashFile(data);
        break;

      //   case 'rn':
      //     await renameFile(data);
      //     break;

      //   case 'cp':
      //     await copyTargetFile(data);
      //     break;

      //   case 'mv':
      //     await moveFileToFolder(data);
      //     break;

      //   case 'compress':
      //     await handleCompressFile(data, point);
      //     break;

      //   case 'decompress':
      //     await handleCompressFile(data, point);
      //     break;

      case '.exit':
        process.exit();
    }
  } else {
    showMessage.wrong();
  }

  showMessage.folder();
};

export default parseLine;
