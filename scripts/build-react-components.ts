import glob from 'glob';
import { createIconsMap, writeFile, Icon, getSvgContent, GENERATED_CODE_COMMENT, cleanAndCreateFolder } from './utils';

const ICONS_DIR = 'icons';
const TARGET_DIR = 'src';

cleanAndCreateFolder(TARGET_DIR);
cleanAndCreateFolder(`${TARGET_DIR}/components`);

const allIconsPaths = glob.sync(`${ICONS_DIR}/**/*.svg`);
const icons = createIconsMap(allIconsPaths);

// Generate react icon components 
const createIconComponentContent = (icon: Icon, svgContent) => {
  const variants = Object.keys(icon.svgFiles);
  const hasFillVariant = variants.length > 1;

  return `
${GENERATED_CODE_COMMENT}
import React, { FunctionComponent } from 'react';
import { IconSize } from '../types';

export interface ${icon.componentName}IconProps {
  size: IconSize, ${hasFillVariant ? `filled: boolean;` : ''}
}

export const ${icon.componentName}: FunctionComponent<${icon.componentName}IconProps> = ({ size = 16 ${hasFillVariant ? `, filled = false` : ''} }) => {
  return (
    <span className='tw-icon tw-icon-${icon.name}'>
      <svg width={String(size)} height={String(size)} >
        { Number(size) === 16 ${hasFillVariant ? '&& filled === false' : ''} && (
          <>
            ${svgContent['outline'][16]}
          </>
        )}
        { Number(size) === 24 ${hasFillVariant ? '&& filled === false' : ''} && (
          <>
            ${svgContent['outline'][24]}
          </>
        )}
        ${hasFillVariant ? `
          { Number(size) === 16 && filled && (
            <>
              ${svgContent['fill'][16]}
            </>
          )}
          { Number(size) === 24 && filled && (
            <>
              ${svgContent['fill'][24]}
            </>
          )}
        `: ''}
      </svg>
    </span>
  )
}

export default ${icon.componentName}
`
}


// Iterate through icons and generate React components for all of them
// wrapped in iife due to async await usage in SVG optimization step
(async () => {
  Object.keys(icons).forEach(async id => {
    const icon = icons[id];
    const svgContent = await getSvgContent(icon);
    const content = createIconComponentContent(icon, svgContent);

    console.info(`React component created for: ${icon.componentName}`)
    writeFile(`${TARGET_DIR}/components/${icon.name}.tsx`, content);
  });
})();

// Create index file that exports all the icons in the components folder
const indexContent = [];
Object.keys(icons).forEach(id => {
  indexContent.push(`export * from './${icons[id].name}';`);
})
writeFile(`src/components/index.ts`, indexContent.join('\n'));

// Create index file in ./src folder for exporting everyhting from ./src/components
writeFile('src/index.ts', `${GENERATED_CODE_COMMENT}\nexport * from "./components";`);

// Create types file that exports common types
writeFile('src/types.ts', `${GENERATED_CODE_COMMENT}\nexport type IconSize = "16" | "24" | 16 | 24;`);
