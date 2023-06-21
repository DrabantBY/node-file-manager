import { resolve, parse } from 'path';

const buildPathFile = ([sourcePath, targetPath]) => {
  const sourceFile = resolve(sourcePath);
  const { base } = parse(sourceFile);
  const targetFile = resolve(targetPath, base);
  return [sourceFile, targetFile];
};

export default buildPathFile;
