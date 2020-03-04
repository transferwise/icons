import fs from 'fs';

export * from './create-icons-map';
export * from './get-svg-content';

export const GENERATED_CODE_COMMENT = `// This is an automatically generetad file, please don't edit it`;

export interface Icon {
  name: string;
  componentName: string;
  sizes: number[];
  svgFiles: {
    [key: string]: { [key: number]: string };
  };
}

const capitalizeFirstLetter = (string: string): string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const copyFileSync = (srcFile: string, destFile: string, encoding = 'utf8'): void => {
  const content = fs.readFileSync(srcFile, encoding);
  fs.writeFileSync(destFile, content, encoding);
};

export const readFile = (path: string): string => {
  return fs.readFileSync(path, 'utf-8');
};

export const writeFile = (path: string, content: string): void => {
  return fs.writeFileSync(path, content, 'utf-8');
};

/**
 * Takes kebab-case icon name and creates PascalCase version
 * @param name kebab-case string
 */
export const createIconComponentName = (name: string): string => {
  const fragments = name.split('-').map(f => capitalizeFirstLetter(f));
  return fragments.join('');
};
