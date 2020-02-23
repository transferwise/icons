export * from './create-icons-map';
export * from './get-svg-content';

export interface Icon {
  name: string;
  componentName: string;
  sizes: number[],
  pathToSvgfiles: {
    [key: string]: { [key: number]: string };
  }
}

import fs from 'fs';

export const validateIconFileName = fileName => {
  // TODO: add validation here, throw error if the file name is not in a supported format
}

export const copyFileSync = (srcFile, destFile, encoding = 'utf8') => {
  const content = fs.readFileSync(srcFile, encoding);
  fs.writeFileSync(destFile, content, encoding);
}

export const readFile = (path) => {
  return fs.readFileSync(path, 'utf-8');
}

export const writeFile = (path, content) => {
  return fs.writeFileSync(path, content, 'utf-8');
}

/**
 * Takes kebab-case icon name and creates PascalCase version
 * @param name kebab-case string
 */
export const createIconComponentName = name => {
  const fragments = name.split('-').map(f => capitalizeFirstLetter(f));
  return fragments.join('');
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

