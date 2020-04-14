import glob from 'glob';
import {
  createIconsMap,
  writeFile,
  getSvgContent,
  createReactIconComponentContent,
  generateAdditionalReactFiles,
} from './utils';

const ICONS_DIR = 'icons';
const TARGET_DIR = 'build';

const allIconsPaths = glob.sync(`${ICONS_DIR}/**/*.svg`);
const icons = createIconsMap(allIconsPaths);

const generateIconComponentFiles = async (): Promise<void> => {
  Object.keys(icons).forEach(async id => {
    const icon = icons[id];
    const svgContent = await getSvgContent(icon);
    const reactComponentContent = createReactIconComponentContent(icon, svgContent);
    // eslint-disable-next-line no-console
    console.info(`React component created for: ${icon.componentName}`);
    writeFile(`${TARGET_DIR}/components/${icon.name}.tsx`, reactComponentContent);

    // TODO: generate angularJs components here
  });
};

generateIconComponentFiles();

generateAdditionalReactFiles(icons, TARGET_DIR);
