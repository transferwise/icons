export * from './create-icons-map';
export * from './get-svg-content';
import fs from 'fs';
import rimraf from 'rimraf';

export const GENERATED_CODE_COMMENT = `// This is an automatically generetad file, please don't edit it`

export interface Icon {
  name: string;
  componentName: string;
  sizes: number[],
  svgFiles: {
    [key: string]: { [key: number]: string };
  }
}

export const validatePathToIcon = path => {
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

