import { readdir } from 'fs/promises';
import { resolve } from 'path';
import { error } from './showMessage.js';

const showFilesList = async () => {
  try {
    const folder = resolve(process.cwd());
    const files = await readdir(folder, { withFileTypes: true });

    const fileNames = files.map((file) => {
      const { name } = file;
      let type = null;
      file.isFile() && (type = 'file');
      file.isDirectory() && (type = 'directory');
      return { name, type };
    });

    const table = fileNames
      .filter((file) => file.type !== null)
      .sort((a, b) => {
        if (a.type > b.type) return 1;
        if (a.type < b.type) return -1;
        return a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1;
      });

    console.table(table);
  } catch {
    error();
  }
};

export default showFilesList;
