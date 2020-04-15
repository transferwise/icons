import glob from 'glob';
import {
  createIconsMap,
  writeFile,
  getSvgContent,
  createReactIconComponentContent,
  createAngularJsIconComponentContent,
  generateAdditionalReactFiles,
  generateAngularJsIconModuleContent,
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
    writeFile(`${TARGET_DIR}/components/${icon.name}.tsx`, reactComponentContent);

    const angularComponentContent = createAngularJsIconComponentContent(icon, svgContent);
    writeFile(
      `${TARGET_DIR}/angular/components/${icon.name}-icon.component.js`,
      angularComponentContent,
    );

    // eslint-disable-next-line no-console
    console.info(`Components created for: ${icon.componentName}`);
  });
};

generateIconComponentFiles();
generateAdditionalReactFiles(icons, TARGET_DIR);
generateAngularJsIconModuleContent(icons, TARGET_DIR);
