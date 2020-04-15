import { Icon, SvgContentForVariantsAndSizes, GENERATED_CODE_COMMENT, writeFile } from '.';
import { IconsMap } from './create-icons-map';

export const createReactIconComponentContent = (
  icon: Icon,
  svgContent: SvgContentForVariantsAndSizes,
): string => {
  const variants = Object.keys(icon.svgFiles);
  const hasFillVariant = variants.length > 1;

  return `
${GENERATED_CODE_COMMENT}
import React, { FunctionComponent } from 'react';
import { IconSize } from '../types';

export interface ${icon.componentName}IconProps {
  size?: IconSize, ${hasFillVariant ? `filled?: boolean;` : ''}
}

export const ${icon.componentName}: FunctionComponent<${
    icon.componentName
  }IconProps> = ({ size = 16 ${hasFillVariant ? `, filled = false` : ''} }) => {
  return (
    <span className='tw-icon tw-icon-${icon.name}'>
      <svg width={String(size)} height={String(size)} fill="currentColor">
        { Number(size) === 16 ${hasFillVariant ? '&& filled === false' : ''} && (
          <>
            ${svgContent.outline[16].react}
          </>
        )}
        { Number(size) === 24 ${hasFillVariant ? '&& filled === false' : ''} && (
          <>
            ${svgContent.outline[24].react}
          </>
        )}
        ${
          hasFillVariant
            ? `
          { Number(size) === 16 && filled && (
            <>
              ${svgContent.fill[16].react}
            </>
          )}
          { Number(size) === 24 && filled && (
            <>
              ${svgContent.fill[24].react}
            </>
          )}
        `
            : ''
        }
      </svg>
    </span>
  )
}
`;
};

export const generateAdditionalReactFiles = (icons: IconsMap, targetDir: string): void => {
  // Create index file that exports all the icons in the components folder
  const indexContent = [];
  Object.keys(icons).forEach(id => {
    indexContent.push(`export * from './${icons[id].name}';`);
  });
  writeFile(`${targetDir}/components/index.ts`, indexContent.join('\n'));

  // Create index file in ./${targetDir} folder for exporting everyhting from ./${targetDir}/components
  writeFile(`${targetDir}/index.ts`, `${GENERATED_CODE_COMMENT}\nexport * from "./components";`);

  // Create types file that exports common types
  writeFile(
    `${targetDir}/types.ts`,
    `${GENERATED_CODE_COMMENT}\nexport type IconSize = "16" | "24" | 16 | 24;`,
  );
};